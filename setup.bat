@echo off
echo.
echo ========================================
echo Manikandan Portfolio - Setup Script
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed.
    echo Please install Node.js v16 or higher from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js version:
node --version
echo [OK] npm version:
npm --version
echo.

echo Installing dependencies...
echo.
call npm install

if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next steps:
echo   1. Run 'npm run dev' to start development server
echo   2. Open http://localhost:5173 in your browser
echo   3. Customize content in src/components/
echo   4. Run 'npm run build' for production
echo   5. Run 'npm run deploy' for GitHub Pages
echo.
echo Check SETUP_GUIDE.md for detailed instructions
echo.
pause
