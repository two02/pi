---
layout: posts
title: රාස්බෙරි පයි එක්කින් LED එකක් blink කරමු.
date: 2023-06-07 15:44:54.000000000 +05:30
type: post
categories: si
tags: robotics

---
<p>රොබෝ කෙනෙක් හදන්න කලින් පොඩ්ඩක් ලේසි දේකින් පටන් ගත්තොත් හොදයි කියල හිතුනා. මේ project එක ඉවර වෙද්දි රාස්බෙරි පයි එකක් පාවිච්චි කරල LED එකක් blink කරන හැටි ඔයා ඉගෙන ගනීවි.</p>
<p>ඕන කරන දේවල්.<br />
set up කරගත්ත රාස්බෙරි පයි එකක්<br />
LED එකක්<br />
100 ohm හෝ ඊට පොඩ්ඩක් වැඩි resistor එකක්<br />
jumper cables</p>
<p>මුලින්ම තියෙන්නෙ පහල තියෙන විදිහට circuit එක හදාගන්න එක.<img src="{{ site.baseurl }}/static/2023/06/LED-and-resistor-connected-series-e1686144596759.png" /><br />
LED එකයි resistor එකයි ශ්‍රේණි ගතව තියෙන්න ඕන(series connection)</p>
<p>ඉතුරු වෙන අග්‍ර දෙකෙන් LED එකේ +(ධන) පැත්ත GPIO pin එක්කට connect කරගන්න. (LED එකේ දිග pin එක තමා ධන අග්‍රය).<img src="{{ site.baseurl }}/static/2023/06/LED-terminals.png" /><br />
අපිනම් මෙතන connect කරල තියෙන්නෙ GPIO 18 pin එකට.</p>
<p>පහල තියෙන diagram එක GPIO pin අදුරගන්න උදව් වේවි. සාමාන්‍යයෙන් අලුත් modelවල pinවල වෙනසක් නෑ. ඔයාගේ පයි එක වෙන ජාතියක් නම් පොඩ්ඩක් හොයල බලල connect කරන්න වෙයි.<img src="{{ site.baseurl }}/static/2023/06/GPIO-pinouts.jpg" /><strong>රාස්බෙරි පයි එකේ පැත්ත ගැන සැලකිලිමත් වෙන්න</strong>.මෙතන GP කියල තියෙන්නේ GPIO pinවලට GND කියල තියෙන්නෙ ground pinවලට.</p>
<p>ඊට පස්සෙ අනිත් පැත්ත(- පැත්ත)ground pin එක්කට connect කරගන්න.<br />
මතක තියාගන්න පැත්ත කියල කීවේ resistor එකත් ශ්‍රේණි ගතව(series) connect වෙලා තියෙන්න ඕන නිසා.)<img src="{{ site.baseurl }}/static/2023/06/connecting-a-LED-to-GPIO-pin.png" /></p>
<p>දැන් තියෙන්නෙ code කරන්න.</p>
<h4>Pythonවලින් Code කරමු.</h4>
<p>ඔයාගේ රාස්බෙරි පයි එකෙන් Python code editor එකක් open කරගන්න. Thonny කියන්නෙ එවගේ code editor එකක්.<img src="{{ site.baseurl }}/static/2023/06/open-thonny.png" /><br />
පහල තියෙන Code එක copy කරගෙන paste කරන්න.</p>
<p><code>import RPi.GPIO as GPIO<br />
from time import sleep</code></p>
<p><code>GPIO.setwarnings(False)<br />
GPIO.setmode(GPIO.BCM)<br />
GPIO.setup(18,GPIO.OUT)</code></p>
<p><code>while True:</code></p>
<p style="padding-left: 40px;"><code>GPIO.output(18,GPIO.HIGH)<br />
sleep(1)<br />
GPIO.output(18,GPIO.LOW)<br />
sleep(1)</code></p>
<p><img src="{{ site.baseurl }}/static/2023/06/paste-the-code.png" /></p>
<p><strong> සමහර විට paste කරද්දි indentation එක නැති වෙන්න පුලුවන්. එහෙම උනොත් Tab එක ඔබල හරි space 4ක් තියල හරි indentation එක හදාගන්න.</strong><br />
ඔයාගේ file එක save කරගන්න.<img src="{{ site.baseurl }}/static/2023/06/LED-blink-codesave.png" /><img src="{{ site.baseurl }}/static/2023/06/save-the-code.png" /></p>
<p>&nbsp;</p>
<p>දැන් තියෙන්නේ code එක run කරන්න.<img src="{{ site.baseurl }}/static/2023/06/LED-blink-coderun.png" /></p>
<p>&nbsp;</p>
