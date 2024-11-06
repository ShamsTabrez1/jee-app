<?php
require_once 'config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JEE Prep - Your Path to Success</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body class="bg-gray-50">
    <?php include 'includes/header.php'; ?>

    <main>
        <!-- Hero Section -->
        <section class="text-center py-20 px-4">
            <h1 class="text-5xl font-bold text-gray-900 mb-8">
                Your Path to JEE Success
            </h1>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Prepare for JEE Mains with our comprehensive practice platform. Get access to previous years' papers, 
                detailed analytics, and a real exam environment.
            </p>
            <div class="flex justify-center gap-4">
                <a href="auth/register.php" class="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                    Start Free Trial
                </a>
                <a href="subscription.php" class="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors">
                    View Plans
                </a>
            </div>
        </section>

        <!-- Features Grid -->
        <section class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Features will be populated by JavaScript -->
        </section>

        <!-- Statistics Section -->
        <section class="bg-indigo-50 py-16">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div class="text-4xl font-bold text-indigo-600 mb-2">50,000+</div>
                        <div class="text-gray-600">Active Students</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
                        <div class="text-gray-600">Practice Questions</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-indigo-600 mb-2">95%</div>
                        <div class="text-gray-600">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php include 'includes/footer.php'; ?>
    <script src="js/main.js"></script>
</body>
</html>