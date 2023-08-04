---
layout: posts
title: රාස්බෙරි පයි එක්කින් hacking lab එකක් හදාගමු.
date: 2023-06-14 10:06:35.000000000 +05:30
categories: si
tags: [hacking, projects]
author:
  login: TharakaJ
  email: tujayasena@gmail.com
  display_name: TharakaJ
  first_name: ''
  last_name: ''

header:
  overlay_image: false
  overlay_filter: 0.5
---
hack කරන්න පටන් ගන්න කලින් hacking lab එකක් හදාගෙන ඉමු.


<p>Kali linux කියන්නේ hackinng tool ගොඩාක් කලින්ම install කරල hack කරන වැඩ වලටම විශේෂයෙන් හදපු OS එකක්. රාස්බෙරි පයිවලට විතරක් නෙවේ, ඔයාගේ PC එකට කෙලින්ම හරි නැත්තම් virtualbox වගේ පාවිච්චි කරල virtual machine එකක් විදිහට උනත් ඔයාට Kali linux පාවිච්චි කරන්න පුලුවන්. කොහොමහරි අද අපි කියල දෙන්නේ ඔයාගෙ රාස්බෙරි පයි එකට Kali linux install කරන හැටි.</p>
<p>සාමාන්‍යයෙන් රාස්බෙරි පයි එකක් setup කරගන්නව වගේම තමා මේකත් setup කරගන්න තියෙන්නේ. රාස්බෙරි පයි imager එක download කරන් open කරගන්න.</p>
<p>රාස්බෙරි පයි imager එක ගැන තව විස්තර ඕන්නම් මෙතන <a href="https://pi.lk/getting-started/setting-up-the-sd-card/" target="_blank" rel="noopener">ලින්ක් එක</a> ක්ලික් කරන්න.<br />
imager එක open කරාම මේවගේ එකක් පේන්න තියෙයි.<img src="{{ site.baseurl }}/static/2023/06/Screenshot-from-2023-04-26-16.33.55@2x-e1682518769168.png" /></p>
<p>choose os කියන button එක ක්ලික් කරන්න.<br />
ඊට පස්සේ පල්ලෙහට scroll කරන් ගිහින් Other specific-purpose OS කියන එක තෝරන්න.<img src="{{ site.baseurl }}/static/2023/06/rpi-imagerotherspecific-OS.png" /></p>
<p>ඒකෙ ඇතුලෙත් පොඩ්ඩක් පල්ලෙහට scroll කරද්දි Kali linux OS එක තියෙවි select කරන්න. ඒක select කරන්න.<img src="{{ site.baseurl }}/static/2023/06/imagerother-specific-oskali-linux.png" /></p>
<p>ඊට පස්සේ ඔයාගෙ රාස්බෙරි පයි එකට හරියන version එක select කරන්න.</p>
<p>ඊලගට ඔයාගෙ SD card එක තෝරල write කරන්න.<br />
ඔයාට ssh enable කරගන්න ඕන්නම් <a href="https://pi.lk/uncategorized/headless-raspberry-pi-set-up/" target="_blank" rel="noopener">මේ ලිපිය</a> පොඩ්ඩක් බලන්න. මෙන්න <a href="https://pi.lk/getting-started/setting-up-the-sd-card/" target="_blank" rel="noopener">මේ ලිපියත්</a> setup කරගන්න උදව් වේවි.</p>
<p>එහෙනම් ඊලගට SD card එක රාස්බෙරි පයි එකට දාලා, power දීලා start up කරගන්න.</p>
