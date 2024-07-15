# Note, to run this, you have to be connected to the UT VPN or be connected to utexas WiFi.
# Before running this file, run "chmod @+x deploy.sh" to make it executable

echo "Building site..."
npm run build
echo "Done."

echo -n "Enter your UT EID: "
read utweb_user
echo "Cleaning up remote directory..."
ssh $utweb_user@panel.utweb.utexas.edu "
cd /home/utweb/utw10091/public_html/
rm -rf assets
rm index.html
rm ieee_favicon.ico
exit"
echo "Done."

echo "Copying files to remote directory..."
scp -r dist/* $utweb_user@panel.utweb.utexas.edu:/home/utweb/utw10091/public_html/
ssh $utweb_user@panel.utweb.utexas.edu "
chmod 644 /home/utweb/utw10091/public_html/index.html
chmod -R 755 /home/utweb/utw10091/public_html/assets"

echo "Done."
