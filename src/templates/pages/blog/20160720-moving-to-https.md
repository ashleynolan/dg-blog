---
layout: post.hbs

title: Moving to HTTPS with LetsEncrypt
url: moving-to-https-with-letsencrypt
description: "An overview of how you can easily make your sites secure by enabling HTTPS."

posted: 2016-07-20T09:45

post:
- post

published: true

categories:
  - "Web Development"
  - "Security"

---

{{#markdown}}

Moving my site to HTTPS had been on my to-do list for quite a while – too long in fact.  Having read [Tim Kadlec’s post](https://timkadlec.com/2015/12/taking-lets-encrypt-for-a-spin/) towards the end of last year regarding a tool called [LetsEncrypt](https://letsencrypt.org/), it made me believe that even a server noob like myself would be able to make the transition.

So last week, I finally decided I would take LetsEncrypt for a spin and secure my site.


## Installing LetsEncrypt on NGINX or Apache

In short, moving to HTTPS is incredibly straightforward whether your site is hosted on NGINX or Apache.

As my site is hosted using NGINX, I followed [a great tutorial written by Graham Smith](https://gablaxian.com/blog/installing-letsencrypt) and within 15 minutes I had HTTPS enabled on my server.  It’s worth noting that although the article references Ubuntu v14.04 the process is exactly the same if you are running the most recent version of Ubuntu, which is v16.04.

If your server is hosted using Apache rather than NGINX the process is even more straightforward.  LetsEncrypt provides an auto-installer that you can run by entering `letsencrypt-auto` at the root of your downloaded LetsEncrypt directory.

For more details on the process of enabling HTTPS on Apache, I suggest taking a look at [Tim’s article](https://timkadlec.com/2015/12/taking-lets-encrypt-for-a-spin/), or alternatively this [great tutorial on Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04) that also explains the process.


## Optimising HTTPS on your server

It’s important to realise that although you have enabled HTTPS, you should then take further steps to ensure your configuration is as secure as possible.

SSL Labs provide an excellent [server testing tool](https://www.ssllabs.com/ssltest/) which can analyse the SSL configuration of your server and provide you with a rating (A+ being the highest).

Bjorn Johansen has [written about the steps](https://bjornjohansen.no/optimizing-https-nginx) that you can go through to optimise your NGINX server in order to get an A+ score on SSL Labs.  If you want to know a bit more detail around SSL security on NGINX, [this really comprehensive post](https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html) by Remy van Elst goes into a bit more depth about the subject.

For Apache users, Remy has [written an equally comprehensive article](https://raymii.org/s/tutorials/Strong_SSL_Security_On_Apache2.html) covering the optimisation steps with respect to an Apache configuration.

With a small amount of tinkering you should have little problem ensuring your site scores an A+ rating on the [SSL Labs test](https://www.ssllabs.com/ssltest/).


## Renewing your SSL Certificate

By default, SSL certificates delivered by LetsEncrypt are valid for 90 days, so it’s important to make sure that you setup a crontab to renew your certificate automatically.

To do this on an NGINX setup, I followed the steps detailed in [this article](https://letsecure.me/secure-web-deployment-with-lets-encrypt-and-nginx/).  The steps to do the same for an Apache setup are detailed in [Step 4 of the Digital Ocean Tutorial I mentioned previously](https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-ubuntu-16-04).

In short, to set this up on NGINX, save the following in a file called renewCerts.sh:

<pre>
<code class="language-vim">
#!/bin/sh
# This script renews all the Let's Encrypt certificates with a validity < 30 days

if ! letsencrypt renew > /var/log/letsencrypt/renew.log 2>&1 ; then
    echo Automated renewal failed:
    cat /var/log/letsencrypt/renew.log
    exit 1
fi
nginx -t && nginx -s reload
</code>
</pre>

Next we need to set our crontab to run this script daily.  On your server, enter `sudo crontab -e` to open your crontab and then add this line to your script – referencing the path where you saved the `renewCerts.sh` file:

<pre>
<code class="language-vim">
@daily /path/to/renewCerts.sh
</code>
</pre>

It’s also a good idea to ensure that your script file is set to be executable by running `chmod +x /path/to/renewCerts.sh`.


## Summary

To sum up, moving to HTTPS isn’t a daunting task.  LetsEncrypt is an extremely accessible tool and one that I couldn’t recommend more highly.

There are also so many useful resources out there that explain the entire process extremely well, irrespective of the server technologies that you are using.

So if you’ve not already taken steps to secure your own sites, take LetsEncrypt for a spin and let me know how you get on!


{{/markdown}}
