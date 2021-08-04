import * as React from "react";

const CustomDomain = () => {
  return (
    <div>
      <a
        href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain"
        rel="noreferrer noopener"
        target="_blank"
      >
        Github Custom Domains
      </a>
      <br />
      <h2>Follow these steps</h2>
      <ol>
        <li>
          Navigate to settings-pages- custom domain = Add custom domain (for all
          others than main do a sub domain like sayplay.saykaren.com
        </li>
        <li>Save</li>
        <li>
          Update DNS (godaddy add the A records with name = @ (@ = the main
          domain which is saykaren.com) value = the IP address github gave.
          (ONLY FIRST starting custom domain)
        </li>
        <li>
          For sub domains I believe I need to add a CNAME record of host = drug
          (whatever the subdomain is) then value = drug.saykaren.com (where the
          website will be will need to test out)
        </li>
        <li>Go to code in vscode.</li>
        <li>
          In code switch gh-pages branch and pull down the CNAME so that doesn't
          get overwritten.
        </li>
        <li>
          Ensure to pull the CNAME on gh-pages branch into local so it doesn't
          get lost
        </li>
        <li>
          switch to main make branch to update the package.json homepage to the
          new url (for others remember to do sub domain like drug.saykaren.com)
        </li>
        <li>commit branch code and push up</li>
        <li>merge changes</li>
        <li>switch to main git pull</li>
        <li>All looks good then npm run deploy</li>
        <li>
          Navigate back into github to this repository to settings-pages- if it
          says your site is READY to be published then click the Theme Chooser
          and do minimal.
        </li>
        <li>Now it should show your site is published in green.</li>
      </ol>
      <ul>
        <li>
          <a
            href="https://www.godaddy.com/community/Managing-Domains/SSL-and-Forwarding-with-masking/m-p/134682#M26036"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoDaddy forwarding details - does not accept HTTPS requests with
            masking or not. Only will work if you install SSL Certificate into
            it.
          </a>
        </li>
        <li>
          <a
            href="https://www.godaddy.com/help/request-my-ssl-certificate-and-learn-how-to-install-it-if-youre-new-to-ssls-start-here-32151"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoDaddy adding SSL Certificates Help
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CustomDomain;
