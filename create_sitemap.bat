del sitemap.txt
for /f %%f in ('dir /b *.html') do echo https://mitchaldichter.com/%%f >> sitemap.txt
