---
layout: posts
title: Set up a headless Raspberry Pi.
date: 2023-04-26 16:42:37.000000000 +05:30
categories:
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
When you set up your RPi in headless mode, you won't need a separate screen for the RPi. Therefore if you don't have a monitor or don't like the desktop environment, this method is for you.


<p>There are several advantages of setting up in headless mode.<br />
1. less power consumption.<br />
2. lightweight OS.<br />
3. No need for an additional monitor or a keyboard.<br />
4. Raspberry Pi doesn't have to be near you.</p>
<p>Then, let's learn how to set up in headless mode.</p>
<p>Download and launch the Raspberry Pi Imager.  <a href="{{ site.baseurl }}/getting-started/#setup-your-sd-card" target="_blank" rel="noopener">Here</a> is a guide for that.</p>
<p>Connect your SD card to the PC using an adapter.</p>
<p>Launch the Imager and click on CHOOSE OS.<br />
<img src="{{ site.baseurl }}/static/2023/04/Screenshot-from-2023-04-26-16.33.55@2x-e1682518769168.png" /></p>
<p>For headless mode, you can install Raspberry Pi OS's Lite version.</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_select-os-window-e1682519013135.png" /><br />
For that, click on "Raspberry Pi OS(other)" and select "Raspberry Pi OS Lite". (You don't have to install the lite version. This works for the regular version too. Just follow the following steps and make the required settings.)</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_select-os-window-e1682519013135.png" /></p>
<p>If you want, you can download an OS and install it.<br />
If you are doing that, scroll down the "CHOOSE OS" window and click Use Custom. Next, select the downloaded OS.<img src="{{ site.baseurl }}/static/2023/04/rpi_select-custom-OS-e1682519714463.png" /></p>
<p>Next, select your SD card. Then you will see an icon with a cog as below. Click on that. (or press ctrl + shift + X )<img src="{{ site.baseurl }}/static/2023/04/rpi_settings-button.png" /></p>
<p>A window will open now. Tick the Set hostname box.<br />
Then fill the box next to it. Remember the name you used along with that ".local" part. Here I have used "raspberrpi" as the hostname.</p>
<p><img src="{{ site.baseurl }}/static/2023/04/rpi_settings-changing-e1682520413894.png" /></p>
<p>Then tick the enable SSH box.<br />
Let's use  "Use password authentication" for now.</p>
<p>Next, tick the "Set username and password" box. (Otherwise, the default username and password will be "pi" and "raspberry" respectively.)</p>
<p>Now set up a username and a password. And remember those, because you'll need those later.</p>
<p>Also, tick the "Configure wireless LAN" box. Fill in your wifi name(SSID) and password.
Then Save.
</p>
<p>Click on the "write" button and set up your SD card.</p>
<p>Once you receive the message, eject the SD card and insert it into the Pi.</p>
<p>Connect the Pi to power.</p>
<p>The Pi will automatically connect to wifi within a few minutes.</p>
<p><strong>Windows users</strong><br />
If you are using Windows on Your PC, <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/">download</a> the software PuTTY and install it.<br />
Do as the installation wizard guide you.<img src="{{ site.baseurl }}/static/2023/04/PuTTY-Installation1-e1682521300379.png" /> After the installation, open the PuTTY application.</p>
<p>Use the hostname you used. (for me, it will be "raspberrypi.local")</p>
<p>Then, select the connection type and port as "ssh" and "22".</p>
<p>Then, click the open button.</p>
<p>You will get a security alert from PuTTY. Accept it.<img src="{{ site.baseurl }}/static/2023/04/putty-alert-e1682525446957.png" /></p>
<p>Then log in by using the username and password you specified earlier.<br />
Now a Raspberry Pi terminal will open from PuTTY.<br />
Now you can use your RPi command line from your PC's desktop.</p>
<p>Mac Users.<br />
Mac අයටත් PuTT for MAC, graphical user interface එක පාවිච්චි කරන්න පුලුවන්. ඒකත් උඩ කියල තියෙනවා වගේම තමා.</p>
<p>Mac users also can use PuTTY for MAC similar to above. Or you can follow the Linux user method given below.</p>
<p>Linux Users.<br />
Open up the Terminal.<br />
Enter the following command.</p>
<p><code>ssh username@hostname.local</code></p>
<p><img src="{{ site.baseurl }}/static/2023/04/ssh-login-e1682526401174.png" /></p>
<p>Don't forget to use the Username and Hostname you set up in the previous step. You can also use the IP address for the "hostname.local" part. <a href="{{ site.baseurl }}/how-to-find-the-ip-address/" target="_blank" rel="noopener">Here</a> is how to find the IP address.<br />
Type "yes" to the next prompt.<br>
Now You are logged into RPi using SSH. Now you can use the RPi using the command line.</p>
