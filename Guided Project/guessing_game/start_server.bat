@echo off
cd /d "e:\MIMO\Guided Project\Guessing Game"
echo Demarrage du serveur sur http://localhost:8080
echo Appuyez sur Ctrl+C pour arreter
python -m http.server 8080
