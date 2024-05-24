import os

replace_pairs = [
['''<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252">''','''<html lang="en"><head>'''],
['''<link rel="icon" type="image/png" sizes="32x32" href="https://mitchaldichter.com/images/profile_image_favicon-32x32.png">''','''<link rel="icon" type="image/png" sizes="32x32" href="images/profile_image_favicon-32x32.png">'''],
['''<link rel="icon" type="image/png" sizes="16x16" href="https://mitchaldichter.com/images/profile_image_favicon-16x16.png">''','''<link rel="icon" type="image/png" sizes="16x16" href="images/profile_image_favicon-16x16.png">'''],
['''<link rel="stylesheet" href="./Differential Equations Reduction of Order_files/maths_survival_guide.css">''','''<link rel="stylesheet" href="maths_survival_guide.css">'''],
['''src="https://mitchaldichter.com/images/youtube_icon.svg"''','''src="images/youtube_icon.svg"'''],
['''<script src="./Differential Equations Reduction of Order_files/tex-chtml.js.download" id="MathJax-script"></script><script src="./Differential Equations Reduction of Order_files/asciimath.js.download" charset="UTF-8"></script><script src="./Differential Equations Reduction of Order_files/noerrors.js.download" charset="UTF-8"></script>''','''<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script"></script>'''],
['''<img id="profile_picture_img" alt="channel logo" src="https://mitchaldichter.com/images/profile_image100x100.webp">''','''<img id="profile_picture_img" alt="channel logo" src="images/profile_image100x100.webp">'''],]
#['''''',''''''],

for element in os.listdir():
  if ".html" in element and "CSR_" not in element:
    HTML_file = open(element, "r")
    HTML_lines = HTML_file.read()
    HTML_file.close()
    
    for pair in replace_pairs:
      HTML_lines = HTML_lines.replace(pair[0],pair[1])
    
    HTML_file = open(element, "w")
    HTML_lines = HTML_file.write(HTML_lines)
    HTML_file.close()
    
