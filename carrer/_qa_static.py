import pathlib
import re
import subprocess

root=pathlib.Path(__file__).resolve().parent
chrome=r'C:\Program Files\Google\Chrome\Application\chrome.exe'
for name,path in [('home','index.html'),('home-v2','portfolio-v2/index.html'),('resume','portfolio-v2/resume.html'),('portfolio','portfolio-v2/portfolio.html'),('slides','portfolio-v2/slides.html')]:
    result=subprocess.run([chrome,'--headless=new','--disable-gpu','--no-sandbox','--disable-extensions','--dump-dom',(root/path).as_uri()],capture_output=True,text=True,encoding='utf-8',errors='replace',timeout=30)
    html=result.stdout
    print(name,'exit',result.returncode,'bytes',len(html),'cases',len(re.findall('id="(?:kstv6|pipeline|cxl|scg|svt|idpp|kstv5)"',html)),'slides',len(re.findall('aria-label="[0-9]+번 슬라이드"',html)),'KSTV6',('KSTV6' in html))
