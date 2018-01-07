# pi-aquarium-controller
A raspberry pi powered aquarium controller. Monitors temperature and controls lights, air and CO2.

This replaces the original Arduino powered aquarium controller and has the following advantages:

- Is network connected:
  - can be managed remotely.
  - can send alerts.
  - can use NTP for accurate time-keeping.
- Multiple on/off times for air, CO2 and lights
- Other stuff as I think of it...

# Installation
Follow these instructions on the command line on your raspberry pi.
## Install node
  ```
  curl -sLS https://apt.adafruit.com/add | sudo bash
  sudo apt-get install node
  sudo reboot
  ```
## Install pi-blaster
**pi-blaster** is an open source project that allows very efficient PWM (pulse width modulation) of GPIO pins on the raspberry pi. This allows us to do things like dim the LED lights, rather than just turn them off or on.
- Clone the repo
  ```
  cd /opt
  sudo git clone https://github.com/sarfata/pi-blaster.git
  ```
- Change the owner of the cloned directory to your user and group rather than root (pi is default for both):
  ```
  sudo chown -R pi:pi pi-blaster
  ```
- Build and install **pi-blaster**:
  ```
  sudo apt-get install autoconf
  cd /opt/pi-blaster
  ./autogen.sh
  ./configure
  make
  sudo make install
  ```
## Install pi-aquarium-controller
- Clone this repo:
  ```
  cd /opt
  sudo git clone https://github.com/kabadisha/pi-aquarium-controller.git
  ```
- Change the owner of the cloned directory to your user and group rather than root (pi is default for both):
  ```
  sudo chown -R pi:pi pi-aquarium-controller
  ```
- Install the project dependencies:
  ```
  npm install
  ```
# To update existing installation
Follow these instructions on the command line on your raspberry pi.
- Update your clone:
  ```
  cd /opt/pi-aquarium-controller
  git pull
  ```
- Update the project dependencies:
  ```
  cd /opt/pi-aquarium-controller
  npm install
  ```
