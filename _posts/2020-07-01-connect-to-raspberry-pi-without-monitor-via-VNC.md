---
layout: posts
categories: hacking
tags: projects hacking blog
excerpt_separator: <!--end_excerpt-->


header:
  overlay_image: "static/let-us-build-a-robot.png"
  overlay_filter: 0.5
---
සමහර වෙලාවට රාස්බෙරි පයි එකේ කෙලින්ම වැඩ කරන්න අමාරුයි. සමහර වෙලාවට monitor එකක් දිගටම රාස්බෙරි පයි එකට වෙන් කරල තියන්න බෑ. නැත්තම් monitor එකක් ඇත්තෙම නෑ, ඒත් desktop version එක පාවිච්චි කරන්න ඕන.
<!--end_excerpt-->

කොහොමද ඔයාගෙ laptop එකේ screen එකෙන්ම රාස්බෙරි පයි එකත් පාවිච්චි කරන්න පුලුවන්නම්.
VNC(Virtual Network Computing) කියන්නෙ එහෙම කරන්න පාවිච්චි කරන්න පුලුවන් graphical desktop sharing system එකක්. VNC Viewer එක ඔයාගේ keyboard, mouse හෝ touch events පවා VNC Server එකට transmit කරනවා. VNC Server එකත් එහෙම එන inputs receive කරල ඒවා update කරනවා screen එකට.එහෙනම් බලමු කොහොමද මේක set up කරගන්නේ කියල.

මුලින්ම ඔයා VNC Server එක ඔයාගේ රාස්බෙරි පයි එකෙන් enable කරන්න ඕන.
මේක කරන්න විදි කිහිපයක් තියෙනවා.

ඔයා දැනටමත් monitor එකක් set කරන් graphical user interface එකනම් පාවිච්චි කරන්නේ,

Raspberry Pi OS image එකේ VNC මුලින්ම install කරල තියෙන්නේ. පරණ versionවලනම්,
Menu › Preferences › Recommended Software කියන තැනට ගිහින් VNC install කරගන්න.

ඔයාට monitor එකක් නැත්තම්,

raspberry pi os එක install කරද්දි ssh enable කරගන්න. ssh enable කරගන්න විදිහ මේ post එකෙන් බලාගන්න පුලුවන්.(raspberry pi os එකේ desktop version එකම install කරගත්තොත් කෙලින්ම ඒ desktop එක load කරගන්න පුලුවන් vnc viewer එකෙන්, නැත්තම් lite version එක install කරොත් ඒකියන්නෙ headless රාස්බෙරි පයි එකක් නම් තියෙන්නෙ ඔයාට virtual desktop එකක් හදාගන්න පුලුවන් vnc එකෙන්ම. )
ඊට පස්සේ sshවලින් log වෙලා vnc එක install කරගන්න පහල command දෙක type කරන්න.
sudo apt update
sudo apt install realvnc-vnc-server realvnc-vnc-viewer
ඊලගට තියෙන්නෙ vnc එක enable කරගන්න. ඒකට පහල command එක type කරන්න.
sudo raspi-config
එතොකට load වෙන programme එකේ Interfacing Options කියන එකට arrow keys සහ Enter keyවලින් Navigate වෙන්න. පහලට ගිහින් VNC › Yes කියන එක select කරන්න.

රාස්බෙරි පයි එකට Connect වෙමු.
ඔයාගෙ රාස්බෙරි පයි එකේ IP address එක හොයාගන්න.
ඔයා රාස්බෙරි පයි එක control කරන්න ඉන්න device එකට VNC Viewer එක download කරගන්න.
ඔයාගෙ රාස්බෙරි පයි එකේ IP address එක VNC Viewer එකට Enter කරන්න.