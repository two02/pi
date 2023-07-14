---
layout: posts
categories: hacking 
tags: projects hacking blog
excerpt_separator: <!--end_excerpt-->

header:
  overlay_image: false
  overlay_filter: 0.5
---


Headless විදිහට රාස්බෙරි පයි එකක් set up කරාම ආයෙ ඒකට screen එකක් ඕන වෙන්නෙ නෑ. ඒ නිසා Monitor එකක් නැති හෝ desktop environment එක පාවිච්චි කරල එපා උන ඔයාටම හරියන විදිහක් තමා මේක.
<!--end_excerpt-->

Headless විදිහට රාස්බෙරි පයි එකක් set up කරගන්න එකේ වාසි ටික්කුත් තියෙනවා.
1. Current එක යනවා අඩුයි.
2. OS එක හරිම light weight.
3. Monitor එකක් keyboard එකක් ඕන නෑ.
4. රාස්බෙරි පයි එක ලග තියෙන්න ඕනත් නෑ.

එහෙනම් බලමු කොහොමද රාස්බෙරි පයි එකක් headless විදිහට set up කරගන්නෙ කියල.

රාස්බෙරි පයි imager එක download කරන් launch කරගන්න. ඒ ගැන තව තොරතුරු ඕන්නම් මෙතනට ගිහින් ආයෙ එන්න.

කලින් වගේම ඔයාගෙ SD card එක adapter එක්කින් ඔයාගෙ laptop එකට connect කරගන්න.

Imager එක launch කරගෙන CHOOSE OS කියන එක click කරන්න.


ඔයාට පුලුවන් Raspberry Pi OS එකේම lite version එක install කරගන්න.


ඒකට Raspberry Pi OS(other) කියන එක click කරල Raspberry Pi OS Lite කියන එක select කරන්න. (Lite version එකම වෙන්න ඕනත් නෑ noramal version එකට උනත් පහල තියෙන settings හැදුවම headless login වෙන්න පුලුවන්.)

ඔයාට කැමතිනම් headless රාස්බෙරි පයි OS එකක් download කරන් install කරගන්න පුලුවන්.
එහෙම කරනවා නම් choose os එකෙන් open උන window එකේ පල්ලෙහාට scroll කරන් ගිහින් use custome කියන එක click කරන්න. ඊට පස්සේ ඔයා download කරපු os image එක select කරන්න තියෙන්නෙ.

ඊලඟට ඔයාගෙ SD card එක select කරන්න.
දැන් ඔයාට පේන්නට තියෙයි පොඩි දැති රෝද icon එකක් settingsවලට ඒක click කරන්න. (නැත්තම් ctrl + shift + X ඔබන්න)

එතොකට open වෙන window එකේ Set hostname කියන එකට tick(හරියක්) දාන්න.
ඉස්සරහ තියෙන කොටුව පුරවන්න. ඒකට ඒ දාන නම .local කෑල්ලත් එක්කම මතක තියාගන්න. ඉස්සරහට ඕන වෙනවා.

ඒවගේම Enable SSH tick කරන්න.
Use password authentication කියන එක දැනට පාවිච්චි කරමු.

ඊලඟට Set username and password කියන එකත් tick කරන්න. (නැත්තම් diffault username password තියෙන්නෙ username:pi password: raspberry කියල)

දැන් username එක්කුයි password එක්කුයි set කරන්න සහ ඒවා මතක තියාගන්න.
(Set කරේ නැත්තම් default username password ඕන වෙන්නේ)

Configure wireless LAN කියන එකත් tick කරන්න. Wifi එකේ නමයි (SSID) password එකයිත් fill කරන්න. ඊලඟට save කරන්න.

Write කියන එක click කරල SD card එක set up කරගන්න.

ඉවරයි කියල message එක ආවම SD card එක eject කරල රාස්බෙරි පයි එකට insert කරගන්න.

රාස්බෙරි පයි එක power එකට connect කරගන්න.

ටික වෙලාවකින් රාස්බෙරි පයි එක wifi වලට autoම connect වෙනවා.

Windows usersලට
දැන් තියෙන්නෙ ඔයාගෙ laptop එක හරි desktop එක හරි පාවිච්චි කරල PuTTY කියන software එක download කරන් install කරගන්න එක.
Installation wizard එකේ කියන විදිහට ලේසියෙන්ම PuTTY install කරගන්න පුලුවන්. Installation එක ඉවර උනාම finish කියන එක click කරන්න.

PuTTY application එක open කරන්න.
රාස්බෙරි පයි එක set up කරද්දි දාපු hostname එක දාන්න. (මගේ නම් raspberrypi.local)

ඊලඟට connection type එකයි port එකයි ssh සහ 22 විදිහට තියෙන්න අරින්න.

ඊලඟට Open button එක click කරන්න.

PuTTY  එකෙන් security alert එකක් එයි ඒක accept කරන්න.

දැන් ඔයා කලින් දාපු username password දාල login වෙන්න. ඔයා username password වෙනස් කරේ නැත්තම් difault username:pi සහ password:raspberry
දැන් PuTTY වල Raspberry Pi terminal එකක් open වෙයි.
දැන් ඔයාට පුලුවන් රාස්බෙරි පයි එක ඔයාගෙ desktop එකේ ඉදන් පාවිච්චි කරන්න command line එක පාවිච්චි කරල.

Mac
Mac අයටත් PuTT for MAC, graphical user interface එක පාවිච්චි කරන්න පුලුවන්. ඒකත් උඩ කියල තියෙනවා වගේම තමා.

නැත්තම් පහල තියෙන linux usersලා වගේ පාවිච්චි කරන්නත් පුලුවන්.

Linux කට්ටිය
Terminal එක open කරන්න.
පහල command එක type කරන්න.

ssh username@hostname.local

Username එක ඔයා දාපු එකම දාන්න අමතක නොකර. Hostname එක වෙනුවට රාස්බෙරි පයි එකේ ip address එක උනත් දාන්න පුලුවන්.
ඊලඟට අහන එකට yes කියල type කරල ඊලඟට password එක අහද්දි ඔයා දාපු password එකම දාන්න.රාස්බෙරි පයි එකේ ip address එක දැනගන්න ඕන්නම් ඔයාගේ wifi එකේ homepage එකට log වෙන්න. ඒකේ connected device එකක් විදිහට රාස්බෙරි පයි එක තියෙවි ip address එකත් එක්කම.

හරි දැන් ඔයා ssh වලින් රාස්බෙරි පයි එකට log වෙලා ඉන්නේ. දැන් ඔයාට command line එකෙන් රාස්බෙරි පයි එක පාවිච්චි කරන්න පුලුවන්.

තාමත් අපහැදිලි තැනක් හෝ ප්‍රශ්නයක් තිබ්බොත් comment එකක් දාන්න අමතක කරන්න එපා.