<?php
require_once 'config.php';
requireLogin();

$user_id = $_SESSION['user_id'];

// Get user data
$stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$user = $stmt->get_result()->fetch_assoc();

// Get recent tests
$stmt = $conn->prepare("
    SELECT tests.*, COUNT(DISTINCT tq.question_id) as total_questions
    FROM tests 
    LEFT JOIN test_questions tq ON tests.id = tq.test_id
    WHERE tests.user_id = ?
    GROUP BY tests.id
    ORDER BY tests.created_at DESC
    LIMIT 5
");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$recent_tests = $stmt->get_result();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - JEE Prep</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <?php include 'includes/header.php'; ?>

    <main class="container mx-auto px-4 py-8">
        <div class="space-y-8">
            <!-- Welcome Section -->
            <div class="bg-white rounded-xl p-6 shadow-md">
                <h1 class="text-2xl font-bold text-gray-900">
                    Welcome back, <?php echo htmlspecialchars($user['name']); ?>!
                </h1>
                <?php if (!$user['is_subscribed']): ?>
                    <p class="text-gray-600 mt-2">
                        Trial ends in <?php 
                            $trial_days = ceil((strtotime($user['trial_ends_at']) - time()) / (60 * 60 * 24));
                            echo $trial_days;
                        ?> days
                    </p>
                <?php endif; ?>
            </div>

            <!-- Quick Actions -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="create-test.php" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">Start New Test</h2>
                    <p class="text-gray-600">Create a customized test based on your preferences</p>
                </a>
                <a href="reports.php" class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h2 class="text-xl font-semibold text-gray-900 mb-2">View Reports</h2>
                    <p class="text-gray-600">Analyze your performance and track progress</p>
                </a>
            </div>

            <!-- Recent Tests -->
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="p-6">
                    <h2 class="text-xl font-semibold text-gray-900">Recent Tests</h2>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Score</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <?php while ($test = $recent_tests->fetch_assoc()): ?>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-900">
                                        <?php echo date('M d, Y', strtotime($test['created_at'])); ?>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <?php if ($test['status'] === 'completed'): ?>
                                            <span class="px-2 py-1 text-sm rounded-full bg-green-100 text-green-800">
                                                <?php echo number_format($test['score'], 1); ?>%
                                            </span>
                                        <?php else: ?>
                                            <span class="text-gray-500">-</span>
                                        <?php endif; ?>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                                        <?php echo ucfirst($test['status']); ?>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <?php if ($test['status'] === 'pending'): ?>
                                            <a href="exam.php?id=<?php echo $test['id']; ?>" 
                                               class="text-indigo-600 hover:text-indigo-900">
                                                Continue
                                            </a>
                                        <?php else: ?>
                                            <a href="review.php?id=<?php echo $test['id']; ?>"
                                               class="text-indigo-600 hover:text-indigo-900">
                                                Review
                                            </a>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>

    <?php include 'includes/footer.php'; ?>
</body>
</html>