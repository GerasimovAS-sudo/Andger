@echo off
chcp 65001 >nul
echo =========================================
echo ПОЛНЫЙ СБРОС ИСТОРИИ GIT И ЧИСТАЯ ЗАГРУЗКА
echo =========================================
echo.

echo [1/4] Удаляем старую папку .git (историю)...
rd /s /q .git

echo [2/4] Создаем новый чистый репозиторий...
git init
git add .
git commit -m "Чистая стартовая версия ANDGER"

echo [3/4] Привязываем к GitHub...
git branch -M main
git remote add origin https://github.com/GerasimovAS-sudo/Andger.git

echo [4/4] Отправляем на GitHub (принудительно)...
git push -u origin main -f

echo.
echo =========================================
echo УСПЕХ! История очищена, залита чистая версия.
echo =========================================
pause