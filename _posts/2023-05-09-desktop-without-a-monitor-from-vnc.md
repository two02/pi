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
<h3>If you already have a monitor and, use a graphical user interface follow these steps.</h3>
<p>VNC is already installed in RPi OS's latest versions.<br />
If it's not, install VNC by following this path.
Menu › Preferences › Recommended Software</p>
<p><img src="{{ site.baseurl }}/static/2023/05/menuconfiguration-e1683620630714.png" /></p>
<br>
<p>Then, go to Menu › Preferences › Raspberry Pi Configuration › Interfaces and enable VNC.</p>
<p><img src="{{ site.baseurl }}/static/2023/05/configurationinterfacesvnc.png" /></p>
<h3>If you don't have a monitor,</h3>
<p>Enable SSH when installing RPi OS.<a href="https://pi.lk/uncategorized/headless-raspberry-pi-set-up/" target="_blank" rel="noopener">Here</a>, You can find how to enable SSH.<br>
(If install the desktop version of RPi OS you can use that desktop when connecting via VNC. If you use the lite version of RPi OS which doesn't have a desktop, you can create a virtual desktop with VNC.)<br />
Then log into RPi with SSH  and run the following commands to install VNC.<br />
{% include copy.html content="sudo apt update" %}
<br>
{% include copy.html content="sudo apt install realvnc-vnc-server realvnc-vnc-viewer" %}
Then you have to enable VNC for that run the below command.<br />
{% include copy.html content="sudo raspi-config" %}
එතොකට load වෙන programme එකේ Interfacing Options කියන එකට arrow keys සහ Enter keyවලින් Navigate වෙන්න. පහලට ගිහින් VNC › Yes කියන එක select කරන්න.<img src="{{ site.baseurl }}/static/2023/05/configinterface-options-e1683621692844.png" /></p>
<p><img src="{{ site.baseurl }}/static/2023/05/interface-optionsvnc-e1683621787672.png" /></p>
<p><img src="{{ site.baseurl }}/static/2023/05/vncyes-e1683621879765.png" /></p>
<p>රාස්බෙරි පයි එකට Connect වෙමු.<br />
ඔයාගෙ රාස්බෙරි පයි එකේ <a href="https://pi.lk/uncategorized/how-to-find-the-ip-address/"><strong>IP address එක හොයාගන්න.</strong></a><br />
ඔයා රාස්බෙරි පයි එක control කරන්න ඉන්න device එකට VNC Viewer එක <strong><a href="https://www.realvnc.com/en/connect/download/viewer/">download</a></strong> කරගන්න.<br />
ඔයාගෙ රාස්බෙරි පයි එකේ IP address එක VNC Viewer එකට Enter කරන්න.<img src="{{ site.baseurl }}/static/2023/05/vnc-viewerenter-ip-address.png" /></p>
