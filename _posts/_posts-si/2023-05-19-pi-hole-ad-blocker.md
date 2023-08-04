---
layout: posts
title: Ad block කරන pi-hole එකක් හදාගමු.
date: 2023-05-19 11:18:37.000000000 +05:30

categories: si
tags: hacking random
author:
  login: TharakaJ
  email: tujayasena@gmail.com
  display_name: TharakaJ
  first_name: ''
  last_name: ''

header:
  overlay_image: "static/2023/06/pi-hole-featured-img.jpg"
  overlay_filter: 0.5
---
website එක්කට ගියාම හැම තැනම Ad විතරක් තිබිල ඕන කරන content එකත් එක්කම වැහිල තියෙන අවස්තා අපි හැමෝටම හම්බෙලා තියෙනවා. අද අපි හදන්න යන්නේ websiteවල තියෙන Ad block කරන pi-hole එකක්.


ඇත්තටම pi-hole එක Ad block කරනවා විතරක් නෙවෙයි. එහෙම කරන ගමන් Adවලට යන data ටිකත් මේක ඉතුරු කරනවා.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-working.png" /><br />
ඊට අමතරව අපි නිතර visit කරන website මතක තියාගන්න නිසා websiteවල loading speed එකත් වැඩි වෙනවා. ඊට අමතරව pi-hole එක අනවශ්‍ය website block කරන නිසා සහ ඔයාගෙ DNS server එක විදිහට pi-hole එක වැඩ කරන නිසා ඔයාගෙ devices ටිකත් ආරක්ෂා කරල දෙනවා.
<p>එහෙනම් බලමු කොහොමද ඔයාගෙ රාස්බෙරි පයි එක pi-holeඑකක් කරගන්නෙ කියල.</p>
<p>Installation<br />
දැන් තියෙන්නෙ pi-hole Install කරගන්න.<br />
ලේසියෙන්ම Install කරගන්න ඕන නම් පහල තියෙන command එක type කරල enter කරන්න.</p>
{% include copy.html content="sudo curl -sSL https://install.pi-hole.net | bash" %}
<p>('|' සලකුණට කියන්නෙ pipe කියල. සාමාන්‍යයෙන් මෙහෙම bash command එකට pipe කරන්න එපා කියන්වා මොකද ඔයා ඊලගට run කරන්න යන script එක මොකක්ද කියල ඔයාට බලන්න බැරි වෙන නිසා. ඒනිසා ඔයාට ඕන්නම් Manually download කරගෙන script එක කියවල installer එක run කරගන්න පුලුවන්.)<img src="{{ site.baseurl }}/static/2023/05/pihole-installation-command.png" /></p>
<p>දැන් installer එක run වෙයි. Static IP address setup කරන තැනට එනකන් Enter එක ඔබාගෙන යන්න.<img src="{{ site.baseurl }}/static/2023/05/pihole-installation_1.png" /></p>
<p><img src="{{ site.baseurl }}/static/2023/05/pi-hole-installer_-static-ip.png" /></p>
<p>ඔයාට කැමතිනම් Static IP address එක installer එක run කරන්න කලින් හරි පස්සෙ හරි manually setup කරගන්නත් පුලුවන්. නැත්තම් autoම Static IP address එකක් installer එකෙන්ම ඊලග පියවරකින් set කරගන්න පුලුවන්. එහෙමනම් continue කියන Enter කරන්න.</p>
<p>ඊලගට interface එක තෝරන්න එයි. eth0 කියන්නෙ ethernet connection එකට, wlan0 කියන්නේ wireless connection එකට.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installerinterface.png" /></p>
<p>ඊලගට තියෙන්නෙ Static IP address එක ගැන. දීලා තියෙන values පාවිච්චි කරන්න yes දෙන්නත් පුලුවන් නැත්තම් manually setup කරන්නත් පුලුවන්.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installersetting-static-ip-adress.png" /></p>
<p>ඊලගට ip conflict ගැන පොඩි දැනුම් දීමක් කරාවි installer එකෙන්. සාමාන්‍යයෙන් මේක ප්‍රශ්නයක් වෙන්නෙ නෑ.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installer-about-ip-conflicts.png" /></p>
<p>ඊලගට තියෙන්නේ Upstream DNS Provider කෙනෙක් Select කරන්න. මේකට තමා අපේ pi-hole එක එයා දන්නෙ නැති DNS request forward කරන්නෙ. ok ඔබාගෙන යන්න තියෙන්නෙ. <img src="{{ site.baseurl }}/static/2023/05/pi-hole-installer-upstream-dns-provider.png" /></p>
<p>ඊලගට default block list එක පාවිච්චි කරන්න Yes කියන එක Select කරන්න. මේක ඔයාට පස්සේ වෙනස් කරගන්න පුලුවන්.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installer-asking-to-using-default-blocklist.png" /></p>
<p>admin interface එකටත් Yes කියල ඒකත් install කරගන්න. මේකෙන් තමා ඔයා Pi-hole එක manage කරගන්නේ.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installerweb-interface.png" /> ඊලගට අහන web server එකට ඕන කරන දේවල් install කරන්නත් Yes Select කරල අවසර දෙන්න.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installerweb-server.png" /></p>
<p>Query logging කියන ඔයාට කැමතිනම් enable කරන්න. මෙකෙන් DNS requests log වෙන එක වෙන්නේ. මේකට yes Select කරොත් ඊලග එකටත් ඔයා කැමති විදිහ Select කරන්න තියෙන්නෙ.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installerquery-logging.png" /><img src="{{ site.baseurl }}/static/2023/05/pi-hole-installerquery-loggingprivacy-mode.png" /></p>
<p>Pi-hole දැන් install වෙයි. ටික වෙලාවක් දෙන්න ඔයාට confirmation page එකක් ටික්කින් බලාගන්න පුලුවන් වෙයි.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installer-final-step.jpg" /><br />
web interface එකට log වෙන්න password එක බලාගන්න අමතක කරන්න එපා. password එක copy කරන් ok ඔබන්න.password එක මාරු කරන්න විදිහත් installation එකේ අන්තිමට බලාගන්න පුලුවන්.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-installation-finishing.png" /></p>
<p>&nbsp;</p>
<p>Admin web page එකට Connect වෙමු.</p>
{% include copy.html content="http://pi.hole/admin" %}
<br>
{% include copy.html content="http://[IP_ADDRESS]/admin" %}
දෙකෙන් එකක් පාවිච්චි කරල Pi-hole එකේ admin webpage එකට Connect වෙන්න පුලුවන්. මෙතනදි තමා එයාල දුන්න password එක ඕන වෙන්නේ.<img src="{{ site.baseurl }}/static/2023/05/log-in-to-pi-hole-admin-webpage.png" /><img src="{{ site.baseurl }}/static/2023/05/pi-hole-admin-webpage.png" /></p>
<br>
<p>Pi-hole එකෙන් වැඩ ගමු.</p>
<p>installer එක run වෙලා ඉවර උනාට පස්සේ ඔයාට ඔයාගෙ router එක configure කරගන්න වෙනවා.(නැත්තම් ඔයාට ඕන කරන deviceවලට pi-hole DNS එක පාවිච්චි කරන්න manually assign කරන්නත් පුලුවන්.)</p>
<p>Browser එකේ ඔයාගෙ router එකේ ip address එක ගහල ඊට පස්සේ login වෙන්න.<br />
ඊලගට settingsවල (router එකෙන් router එකට වෙනස් වෙනවා.) DHCP DNS කියන එකට දාල තියෙන ip address එක ඔයාගේ රාස්බෙරි පයි pi-hole එකේ ip address එකට මාරු කරන්න.<img src="{{ site.baseurl }}/static/2023/05/changing-listed-DNS-server-in-router.png" /></p>
<p>දැන් වෙනස් කරපුවා save කරල router එක restart උනාට පස්සේ ඔයාගෙ pi-hole එක වැඩ කරනවා.</p>
<p>එහෙනම් ad නැතුව internet එක අත්විදින්න.<img src="{{ site.baseurl }}/static/2023/05/pi-hole-working.png" /></p>
