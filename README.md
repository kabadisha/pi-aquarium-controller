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
- Install node:
```
curl -sLS https://apt.adafruit.com/add | sudo bash
sudo apt-get install node
sudo reboot
```
- Clone this repo:
```
cd /opt
sudo git clone https://github.com/kabadisha/pi-aquarium-controller.git
```
- Change the owner of the cloned directory to your user and group rather than root (pi is default for both):
```
sudo chown -R pi:pi pi-aquarium-controller
```
- Install the project dependancies:
```
npm install
```
