---
layout: posts
title: VNC එක්ක monitor එකක් නැතුව රාස්බෙරි පයි desktop එක පාවිච්චි කරමු
date: 2023-05-09 08:56:33.000000000 +05:30
type: post
categories: si
tags: random projects
excerpt_separator: <!--end_excerpt-->

author:
  login: TharakaJ
  email: tujayasena@gmail.com
  display_name: TharakaJ
  first_name: ''
  last_name: ''

header:
  overlay_image: "static/2023/06/featured-image-for-desktop-without-monitor-with-VNC.png"
  overlay_filter: 0.5
---
සමහර වෙලාවට රාස්බෙරි පයි එකේ කෙලින්ම වැඩ කරන්න අමාරුයි. සමහර වෙලාවට monitor එකක් දිගටම රාස්බෙරි පයි එකට වෙන් කරල තියන්න බෑ. නැත්තම් monitor එකක් ඇත්තෙම නෑ, ඒත් desktop version එක පාවිච්චි කරන්න ඕන.
කොහොමද ඔයාගෙ laptop එකේ screen එකෙන්ම රාස්බෙරි පයි එකත් පාවිච්චි කරන්න පුලුවන්නම්.<!--end_excerpt--><br> 


VNC(Virtual Network Computing) කියන්නෙ එහෙම කරන්න පාවිච්චි කරන්න පුලුවන් graphical desktop sharing system එකක්. VNC Viewer එක ඔයාගේ keyboard, mouse හෝ touch events පවා VNC Server එකට transmit කරනවා. VNC Server එකත් එහෙම එන inputs receive කරල ඒවා update කරනවා screen එකට.එහෙනම් බලමු කොහොමද මේක set up කරගන්නේ කියල.
<p>මුලින්ම ඔයා VNC Server එක ඔයාගේ රාස්බෙරි පයි එකෙන් enable කරන්න ඕන.<br />
මේක කරන්න විදි කිහිපයක් තියෙනවා.</p>
<p>ඔයා දැනටමත් monitor එකක් set කරන් graphical user interface එකනම් පාවිච්චි කරන්නේ,</p>
<p>Raspberry Pi OS image එකේ VNC මුලින්ම install කරල තියෙන්නේ. පරණ versionවලනම්,<br />
Menu › Preferences › Recommended Software කියන තැනට ගිහින් VNC install කරගන්න.</p>
<p><img src="{{ site.baseurl }}/static/2023/05/menuconfiguration-e1683620630714.png" /></p>
<br>
<p>ඊලගට Menu › Preferences › Raspberry Pi Configuration › Interfaces. තැනට ගිහින් VNC enable කරන්න.</p>
<p><img src="{{ site.baseurl }}/static/2023/05/configurationinterfacesvnc.png" /></p>
<p>ඔයාට monitor එකක් නැත්තම්,</p>
<p>raspberry pi os එක install කරද්දි ssh enable කරගන්න. ssh enable කරගන්න විදිහ <a href="https://pi.lk/uncategorized/headless-raspberry-pi-set-up/" target="_blank" rel="noopener">මේ post</a> එකෙන් බලාගන්න පුලුවන්.(raspberry pi os එකේ desktop version එකම install කරගත්තොත් කෙලින්ම ඒ desktop එක load කරගන්න පුලුවන් vnc viewer එකෙන්, නැත්තම් lite version එක install කරොත් ඒකියන්නෙ headless රාස්බෙරි පයි එකක් නම් තියෙන්නෙ ඔයාට virtual desktop එකක් හදාගන්න පුලුවන් vnc එකෙන්ම. )<br />
ඊට පස්සේ sshවලින් log වෙලා vnc එක install කරගන්න පහල command දෙක type කරන්න.<br />
{% include copy.html content="sudo apt update" %}
<br>
{% include copy.html content="sudo apt install realvnc-vnc-server realvnc-vnc-viewer" %}
ඊලගට තියෙන්නෙ vnc එක enable කරගන්න. ඒකට පහල command එක type කරන්න.<br />
{% include copy.html content="sudo raspi-config" %}
එතොකට load වෙන programme එකේ Interfacing Options කියන එකට arrow keys සහ Enter keyවලින් Navigate වෙන්න. පහලට ගිහින් VNC › Yes කියන එක select කරන්න.<img src="{{ site.baseurl }}/static/2023/05/configinterface-options-e1683621692844.png" /></p>
<p><img src="{{ site.baseurl }}/static/2023/05/interface-optionsvnc-e1683621787672.png" /></p>
<p><img src="{{ site.baseurl }}/static/2023/05/vncyes-e1683621879765.png" /></p>
<p>රාස්බෙරි පයි එකට Connect වෙමු.<br />
ඔයාගෙ රාස්බෙරි පයි එකේ <a href="https://pi.lk/uncategorized/how-to-find-the-ip-address/"><strong>IP address එක හොයාගන්න.</strong></a><br />
ඔයා රාස්බෙරි පයි එක control කරන්න ඉන්න device එකට VNC Viewer එක <strong><a href="https://www.realvnc.com/en/connect/download/viewer/">download</a></strong> කරගන්න.<br />
ඔයාගෙ රාස්බෙරි පයි එකේ IP address එක VNC Viewer එකට Enter කරන්න.<img src="{{ site.baseurl }}/static/2023/05/vnc-viewerenter-ip-address.png" /></p>
