@echo off
chcp 65001 >nul
title ANDGER - ПОЛНАЯ ОЧИСТКА И ЗАГРУЗКА
cd /d "%~dp0"

echo =========================================
echo 🚨 ВНИМАНИЕ! ЭТО УДАЛИТ ВСЮ СТАРУЮ ИСТОРИЮ НА GITHUB
echo =========================================
echo.
echo Нажми любую клавишу, если готов продолжить, или закрой окно для отмены.
pause >nul

echo.
echo 🗑 Шаг 1: Удаляем старую историю Git...
if exist ".git" (
    rmdir /s /q ".git"
    echo ✅ Старая история удалена.
) else (
    echo ⚠️ Папка .git не найдена, создаем с нуля.
)

echo.
echo 🌱 Шаг 2: Создаем новый репозиторий...
git init
git add .
git commit -m "Финальная чистая версия ANDGER"

echo.
:: Ссылка на твой репозиторий
set "repo_url=https://github.com/GerasimovAS-sudo/Andger.git"
echo 🔗 Шаг 3: Привязываем к GitHub (%repo_url%)...
git remote add origin %repo_url%
git branch -M main

echo.
echo ☁️ Шаг 4: Отправляем на GitHub (Force Push)...
echo (Если попросит логин/пароль - введи данные от GitHub)
git push -u origin main -f

echo.
echo =========================================
echo ✅ УСПЕХ! Вся старая история стерта. Загружена одна чистая версия.
echo ⏳ Подожди 1-2 минуты, Vercel обновит сайт.
echo =========================================
pause