import os, time
BUILD=time.strftime('%Y%m%d%H%M%S')
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)),"src"))
r=lambda p:open(p,encoding="utf-8").read()
css=r('base/css.css')+r('extra.css')+r('planner.css')+r('splash.css')
html=f'''<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Budapest">
<meta name="theme-color" content="#0b101a">
<meta name="build" content="{BUILD}">
<title>Budapest a pie · Audioguía</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,800;1,9..144,400;1,9..144,600&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css">
<script src="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js"></script>
<style>{css}</style>
</head>
<body>
{r('splash.html')}
{r('base/landing.html')}
{r('app.html')}
{r('base/sheet.html')}
<div class="toast" id="toast"></div>
<script>
const BUILD="{BUILD}";
{r('base/content.js')}
{r('base/photos.js')}
{r('stories.js')}
{r('more.js')}
{r('deep.js')}
{r('briefs.js')}
{r('guide.js')}
{r('main.js')}
{r('planner.js')}
{r('init.js')}
{r('base/landing.js')}
{r('splash.js')}
{r('refresh.js')}
</script>
</body>
</html>
'''
open('../index.html','w',encoding="utf-8").write(html)
print(len(html))
