---
layout: post.hbs

title: Setting up a site on Digital Ocean
url: setting-up-a-site-on-digital-ocean
description: "An explanation of the steps involved in moving your hosting to Digital Ocean."

posted: 2016-07-20T10:00

post:
- post

published: true

categories:
  - "Web Development"
  - "Hosting"

---

{{#markdown}}

A couple of weeks ago, I successfully made the switch from hosting my site on GoDaddy to setting up a droplet on Digital Ocean.

My main reason for making the move was that I wanted a hosting environment that I felt I could truly control, as well as wanting to secure my site using HTTPS – [a potentially free service](/blog/moving-to-https-with-letsencrypt) that GoDaddy wanted to charge me for enabling.

## Why Digital Ocean?

I had done a bit of research into hosting providers along with their costs and they seemed very reasonable for the service provided.  Also, being a bit of a server noob, the extensive step-by-step tutorials they provide really appealed to me.  Having now completed the switch I can safely say that their articles were extremely useful throughout the process.

This post isn’t intended to be an in-depth guide to setting up a droplet on Digital Ocean – simply because their own tutorials are so good that I don’t feel that there’s a need for me to rehash that content.  But I did want to document the main steps that I went through when moving my hosting – including the tutorials that I used – as a reference for anyone else thinking of making a similar switch.


## Starting up

Digital Ocean gives you a couple of options when it comes to setting up a server with them.

You can either pick a distribution OS, such as Ubuntu, and go [carte blanche](http://www.thefreedictionary.com/carte+blanche), or you can choose a one-click setup, which will give you a server droplet pre-installed with a certain stack, such as LAMP or Node.

As I wanted to learn more about how to setup my own server, I chose to setup my own distribution from scratch, going with an Ubuntu distribution.


## Connecting to your server and initial setup tasks

Once you have your droplet, it’s important to make sure you can connect to it via SSH, which stands for Secure Shell.

To do this, I followed the [relevant tutorial on Digital Ocean](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04), creating my own user with root privileges.

Once you have completed steps 1-6, you can also set up a basic firewall (Step 7).  I’d also recommend completing the tasks [in this tutorial](https://www.digitalocean.com/community/tutorials/additional-recommended-steps-for-new-ubuntu-14-04-servers) relating to your servers timezone and setting up NTP (Network Time Protocol); although the tutorial relates to Ubuntu v14.04 it is still relevant for newer versions.

Once complete, you are ready to choose and install your server software.


## Apache or NGINX

The two most popular open source web servers available are Apache and NGINX.

I won’t pretend to know all the pros and cons of both tools; they are both powerful and highly capable choices.  I decided to go with NGINX purely because, after doing some research, I discovered it was slightly better at serving static content; perfect for my setup as I compile my site into a set of static web pages using [Assemble](http://assemble.io/).

If you’d like to read more about both pieces of software, I’d [recommend reading this article on the subject](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations).

## Installing NGINX

Unsurprisingly, Digital Ocean has another great tutorial detailing [exactly how to install NGINX on an Ubuntu server](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-16-04).

It’s a very straightforward process using the `apt` packaging system.  Following through the steps outlined should get you to the point where you are serving up a test HTML page on your new server.


## Managing your site with Git

Now that you have your server setup and serving content, a nice addition is to install Git on your server so that you can easily release your code when pushing changes to source control.

Guess what?  That’s right, Digital Ocean have a tutorial on how to do this – simply [follow the steps outlined](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-16-04) to install git using `apt` (much like we did previously when installing NGINX).

Once installed, you should define your workflow for updating newly pushed content on your server.  If you are using a static site generator, you have a couple of choices.

You can either set up your Git repo to have a production folder that you compile and commit along with any updates you make.  This means that you then will need to SSH into your server and do a `git pull` to update your production site.

A better alternative is to [set up git hooks](https://www.digitalocean.com/community/tutorials/how-to-use-git-hooks-to-automate-development-and-deployment-tasks), so that when the master branch of your git repository is updated with new commits, it will subsequently run a predefined task (or tasks), via a tool like Grunt, Gulp or NPM scripts.  In the case of a statically generated site, we would run a set of tasks to compile your site and front-end assets on your server.

Setting up a git workflow such as this means that you don’t have to manually transfer files, which is time-consuming and error prone.  Automating your updates like this is well worth the effort!


## Next Steps

You should now have a web server all ready to go!  But before you’re done, there are a couple of additional tasks that are well worth completing.

### HTTPS

If you’d like to enable HTTPS on your site – which is recommended for a [number of reasons](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https?hl=en) – then take a look at [this associated blog post](/blog/moving-to-https-with-letsencrypt) that I have written explaining how to secure your site using a tool called LetsEncrypt.

### Email

Having a custom email address for your site is a nice additional feature.  For my site I use [Zoho](https://www.zoho.com/signup.html), who let you setup a custom domain email for free (Google also provide this service, but charge for it).

When creating an account, Zoho provide excellent information on configuring your DNS with their mailservers, but if you need additional help then I’d recommend [this article which provides all the details you should need](https://www.digitalocean.com/community/tutorials/how-to-set-up-zoho-mail-with-a-custom-domain-managed-by-digitalocean-dns).

### CDN

If you would like to configure a CDN for your site, services like [CloudFlare](https://www.cloudflare.com/plans/) provide a free account tier worth checking out.

For more details, [check out this tutorial](https://www.digitalocean.com/community/tutorials/how-to-mitigate-ddos-attacks-against-your-website-with-cloudflare) which covers how to set up a CDN for your site.  Enabling a CDN is especially recommended if you think your site will experience traffic spikes as this will give you better control over the caching of your sites front-end assets, such as CSS, JavaScript and images.


## …and we’re done!

Hopefully you can now see that setting up your own server isn’t such a daunting task.  There are lots of great tutorials out there explaining how, and more importantly why, you can configure your server in certain ways, giving you help every step of the way.

In total I spent a couple of nights completing the above steps to migrate my site across to Digital Ocean, but I think the time spent was massively worthwhile.  I now feel a lot more confident configuring aspects of my server that I previously knew little about.

If you have any questions or general comments about anything I’ve mentioned, please do get in touch – I’d love to hear other people’s experiences when setting up their own servers!

{{/markdown}}
