# GitHub-қа жүктеу

## Браузер арқылы

1. GitHub-қа кіріп, New repository таңдаңыз.
2. Атауын `senim-week1-frontend` деп қойыңыз. Public немесе Private түрін жетекші талабына сай таңдаңыз.
3. Бос репозиторий құрыңыз; README және .gitignore бұл жобаның ішінде бар.
4. Upload files арқылы осы папканың ішіндегі файлдар мен src, public, docs папкаларын жүктеңіз. ZIP файлын ғана салмаңыз: GitHub код файлдарын бөлек көрсетуі керек.
5. Жасырын `.gitignore` және `.env.example` файлдарын да қосыңыз. package-lock.json болсын.
6. `Initial project setup for week 1` деген commit хабарламасын жазыңыз.

Егер жобаны компьютерде іске қосып үлгерсеңіз, node_modules, .next, .env.local және tsconfig.tsbuildinfo файлдарын браузерге сүйреп жүктемеңіз. Браузерлік upload .gitignore ережелерін автоматты орындамайды.

## Git арқылы

Git орнатылған болуы керек. Терминалды дәл осы жоба папкасында ашыңыз. Git commit үшін автор аты мен email сұралса, өз деректеріңізді осы репозиторийге баптаңыз.

```powershell
git init
git add .
git status
git commit -m "Initial project setup for week 1"
git branch -M main
```

GitHub-тағы бос репозиторийдің нақты URL мекенжайын төмендегі үлгі орнына қойыңыз:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/senim-week1-frontend.git
git push -u origin main
```

`git status` нәтижесінде .env.local, node_modules және .next болмауы тиіс. Құпия кілттер бұл жоба үлгісіне енгізілмеген.
