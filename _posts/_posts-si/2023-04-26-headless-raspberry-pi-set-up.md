---
layout: posts
title: Headless Raspberry Pi එකක් set up කරගමු
date: 2023-04-26 16:42:37.000000000 +05:30
type: post
categories:
- si
tags: [random]
author:
  login: TharakaJ
  email: tujayasena@gmail.com
  display_name: TharakaJ
  first_name: ''
  last_name: ''

header:
  overlay_image: "static/2023/06/headless-rpi-featured-img.jpg"
  overlay_filter: 0.5
---
Headless විදිහට රාස්බෙරි පයි එකක් set up කරාම ආයෙ ඒකට screen එකක් ඕන වෙන්නෙ නෑ. ඒ නිසා Monitor එකක් නැති හෝ desktop environment එක පාවිච්චි කරල එපා උන ඔයාටම හරියන විදිහක් තමා මේක.


<p>Headless විදිහට රාස්බෙරි පයි එකක් set up කරගන්න එකේ වාසි ටික්කුත් තියෙනවා.<br />
1. Current එක යනවා අඩුයි.<br />
2. OS එක හරිම light weight.<br />
3. Monitor එකක් keyboard එකක් ඕන නෑ.<br />
4. රාස්බෙරි පයි එක ලග තියෙන්න ඕනත් නෑ.</p>
<p>එහෙනම් බලමු කොහොමද රාස්බෙරි පයි එකක් headless විදිහට set up කරගන්නෙ කියල.</p>
<p>රාස්බෙරි පයි imager එක download කරන් launch කරගන්න. ඒ ගැන තව තොරතුරු ඕන්නම් <a href="https://pi.lk/getting-started/setting-up-the-sd-card/" target="_blank" rel="noopener">මෙතනට</a> ගිහින් ආයෙ එන්න.</p>
<p>කලින් වගේම ඔයාගෙ SD card එක adapter එක්කින් ඔයාගෙ laptop එකට connect කරගන්න.</p>
<p>Imager එක launch කරගෙන CHOOSE OS කියන එක click කරන්න.<br />
<img src="{{ site.baseurl }}/static/2023/04/Screenshot-from-2023-04-26-16.33.55@2x-e1682518769168.png" /></p>
<p>ඔයාට පුලුවන් Raspberry Pi OS එකේම lite version එක install කරගන්න.</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_select-os-window-e1682519013135.png" /><br />
ඒකට Raspberry Pi OS(other) කියන එක click කරල Raspberry Pi OS Lite කියන එක select කරන්න. (Lite version එකම වෙන්න ඕනත් නෑ noramal version එකට උනත් පහල තියෙන settings හැදුවම headless login වෙන්න පුලුවන්.)</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_select-os-window-e1682519013135.png" /></p>
<p>ඔයාට කැමතිනම් headless රාස්බෙරි පයි OS එකක් download කරන් install කරගන්න පුලුවන්.<br />
එහෙම කරනවා නම් choose os එකෙන් open උන window එකේ පල්ලෙහාට scroll කරන් ගිහින් use custome කියන එක click කරන්න. ඊට පස්සේ ඔයා download කරපු os image එක select කරන්න තියෙන්නෙ.<img src="{{ site.baseurl }}/static/2023/04/rpi_select-custom-OS-e1682519714463.png" /></p>
<p>ඊලඟට ඔයාගෙ SD card එක select කරන්න.<br />
දැන් ඔයාට පේන්නට තියෙයි පොඩි දැති රෝද icon එකක් settingsවලට ඒක click කරන්න. (නැත්තම් ctrl + shift + X ඔබන්න)<img src="{{ site.baseurl }}/static/2023/04/rpi_settings-button.png" /></p>
<p>එතොකට open වෙන window එකේ Set hostname කියන එකට tick(හරියක්) දාන්න.<br />
ඉස්සරහ තියෙන කොටුව පුරවන්න. ඒකට ඒ දාන නම .local කෑල්ලත් එක්කම මතක තියාගන්න. ඉස්සරහට ඕන වෙනවා.</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_settings-changing-e1682520413894.png" /></p>
<p>ඒවගේම Enable SSH tick කරන්න.<br />
Use password authentication කියන එක දැනට පාවිච්චි කරමු.</p>
<p>ඊලඟට Set username and password කියන එකත් tick කරන්න. (නැත්තම් diffault username password තියෙන්නෙ username:pi password: raspberry කියල)</p>
<p>දැන් username එක්කුයි password එක්කුයි set කරන්න සහ ඒවා මතක තියාගන්න.<br />
(Set කරේ නැත්තම් default username password ඕන වෙන්නේ)</p>
<p>Configure wireless LAN කියන එකත් tick කරන්න. Wifi එකේ නමයි (SSID) password එකයිත් fill කරන්න. ඊලඟට save කරන්න.</p>
<p>Write කියන එක click කරල SD card එක set up කරගන්න.</p>
<p>ඉවරයි කියල message එක ආවම SD card එක eject කරල රාස්බෙරි පයි එකට insert කරගන්න.</p>
<p>රාස්බෙරි පයි එක power එකට connect කරගන්න.</p>
<p>ටික වෙලාවකින් රාස්බෙරි පයි එක wifi වලට autoම connect වෙනවා.</p>
<p><strong>Windows usersලට</strong><br />
දැන් තියෙන්නෙ ඔයාගෙ laptop එක හරි desktop එක හරි පාවිච්චි කරල PuTTY කියන software එක <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/">download</a> කරන් install කරගන්න එක.<br />
Installation wizard එකේ කියන විදිහට ලේසියෙන්ම PuTTY install කරගන්න පුලුවන්.<img src="{{ site.baseurl }}/static/2023/04/PuTTY-Installation1-e1682521300379.png" /> Installation එක ඉවර උනාම finish කියන එක click කරන්න.</p>
<p>PuTTY application එක open කරන්න.<br />
රාස්බෙරි පයි එක set up කරද්දි දාපු hostname එක දාන්න. (මගේ නම් raspberrypi.local)</p>
<p>ඊලඟට connection type එකයි port එකයි ssh සහ 22 විදිහට තියෙන්න අරින්න.</p>
<p>ඊලඟට Open button එක click කරන්න.</p>
<p>PuTTY  එකෙන් security alert එකක් එයි ඒක accept කරන්න.<img src="{{ site.baseurl }}/static/2023/04/putty-alert-e1682525446957.png" /></p>
<p>දැන් ඔයා කලින් දාපු username password දාල login වෙන්න. ඔයා username password වෙනස් කරේ නැත්තම් default username:pi සහ password:raspberry<br />
දැන් PuTTY වල Raspberry Pi terminal එකක් open වෙයි.<br />
දැන් ඔයාට පුලුවන් රාස්බෙරි පයි එක ඔයාගෙ desktop එකේ ඉදන් පාවිච්චි කරන්න command line එක පාවිච්චි කරල.</p>
<p>Mac<br />
Mac අයටත් PuTT for MAC, graphical user interface එක පාවිච්චි කරන්න පුලුවන්. ඒකත් උඩ කියල තියෙනවා වගේම තමා.</p>
<p>නැත්තම් පහල තියෙන linux usersලා වගේ පාවිච්චි කරන්නත් පුලුවන්.</p>
<p>Linux කට්ටිය<br />
Terminal එක open කරන්න.<br />
පහල command එක type කරන්න.</p>
<p><code>ssh username@hostname.local</code></p>
<p><img src="{{ site.baseurl }}/static/2023/04/ssh-login-e1682526401174.png" /></p>
<p>Username එක ඔයා දාපු එකම දාන්න අමතක නොකර. Hostname එක වෙනුවට රාස්බෙරි පයි එකේ ip address එක උනත් දාන්න පුලුවන්.<br />
ඊලඟට අහන එකට yes කියල type කරල ඊලඟට password එක අහද්දි ඔයා දාපු password එකම දාන්න.රාස්බෙරි පයි එකේ ip address එක දැනගන්න ඕන්නම් ඔයාගේ wifi එකේ homepage එකට log වෙන්න. ඒකේ connected device එකක් විදිහට රාස්බෙරි පයි එක තියෙවි ip address එකත් එක්කම.</p>
<p>හරි දැන් ඔයා ssh වලින් රාස්බෙරි පයි එකට log වෙලා ඉන්නේ. දැන් ඔයාට command line එකෙන් රාස්බෙරි පයි එක පාවිච්චි කරන්න පුලුවන්.</p>
<p>තාමත් අපහැදිලි තැනක් හෝ ප්‍රශ්නයක් තිබ්බොත් comment එකක් දාන්න අමතක කරන්න එපා.</p>
