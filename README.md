# Check-Network-Connection
A message popup to display disconnection of network

## Type
Frontend, Responsive

## Description
<li> The connection is checked every <b>3 seconds</b> whether it is on or off.</li>
<li> When Internet connection is off, a popup appears with a count down timer of <b>10 seconds</b>. </li>
<li> After every 10 seconds, Network is checked again if connected or not.</li>
<li> Once network is connected again, popup displays the connectivity as on and then disappears.</li>

<hr/>

### Checking Network...
<b>Fetch</b> operation is executed on a random API url :

If some positive response is returned : Online i.e., status >= 200 && status < 300

If some unwanted response is returned : Offline i.e., status < 200 && status >= 300

<hr/>

## Tech Used
HTML, CSS, Javascript

<hr/>
<b> Offline: </b>

![Offline](https://user-images.githubusercontent.com/39863626/224352704-99a83140-8aa0-4312-81fc-7eb93771ef7e.png)


<b> Online: </b>

![Online](https://user-images.githubusercontent.com/39863626/224352759-82210587-ce80-4a07-853e-9447c2b9cdb4.png)
