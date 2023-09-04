---
layout: posts
title: The Raspberry Pi desktop without a monitor.
date: 2023-05-09 08:56:33.000000000 +05:30
type: post
categories: 
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
Sometimes, You can't dedicate an entire monitor for your RPi. Or even though you want to use the desktop version, you don't have a monitor.  Is there a way to use your RPi from your laptop's screen?<!--end_excerpt-->


VNC (Virtual Network Computing) is a system that allows you to share your graphical desktop.
And also it captures your keyboard, mouse, and touch events. The Viewer transmits those events to the VNC server. The VNC server on RPi receives those inputs and updates them on the RPi.(or any other device you connect this way)<br>
Let's find out how to set up VNC for your device.
<br>
<p>First, you have to enable the VNC server on your RPi. There are several ways for that.
</p>
<p>If you already have a monitor and, use a graphical user interface follow these steps.</p>
<p>Raspberry Pi OS image එකේ VNC මුලින්ම install කරල තියෙන්නේ. පරණ versionවලනම්,<br />
Menu › Preferences › Recommended Software කියන තැනට ගිහින් VNC install කරගන්න.</p>
<p><img src="{{ site.baseurl }}/static/2023/05/menuconfiguration-e1683620630714.png" /></p>
<br>
<p>ඊලගට Menu › Preferences › Raspberry Pi Configuration › Interfaces. තැනට ගිහින් VNC enable කරන්න.</p>
<p><img src="{{ site.baseurl }}/static/2023/05/configurationinterfacesvnc.png" /></p>
<p>ඔයාට monitor එකක් නැත්තම්,</p>
<p>Raspberry Pi os එක install කරද්දි ssh enable කරගන්න. ssh enable කරගන්න විදිහ <a href="https://pi.lk/uncategorized/headless-raspberry-pi-set-up/" target="_blank" rel="noopener">මේ post</a> එකෙන් බලාගන්න පුලුවන්.(Raspberry Pi os එකේ desktop version එකම install කරගත්තොත් කෙලින්ම ඒ desktop එක load කරගන්න පුලුවන් vnc viewer එකෙන්, නැත්තම් lite version එක install කරොත් ඒකියන්නෙ headless රාස්බෙරි පයි එකක් නම් තියෙන්නෙ ඔයාට virtual desktop එකක් හදාගන්න පුලුවන් vnc එකෙන්ම. )<br />
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
