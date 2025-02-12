# Speedrun Tech

<!---------------------------------------------->

## Base Movement

### Slide and Slam Momentum Mechanics
<br /> 
<!-- break necessary to have a gap -->
<tb style="width:100%; vertical-align: top">
  <tr style="font-size: 11px; font-weight: bold" bgcolor="232428">
    <td>DESCRIPTION</td> <!-- these three are the row names -->
    <td>INPUTS</td>
    <td>EXAMPLE</td>
  </tr>
  <tr>
    <td> <!-- description (edit below) -->
        Sliding preserves any momentum you had prior to the slide, this momentum will be slowly lost while sliding on the ground. Jumping or sliding after a slam grants additional jump height or slide speed depending on how long you were slamming.
    </td>
    <td width="100px"> <!-- inputs -->
      TBA (To Be Added)
    </td>
    <td width="200px"> <!-- video example (change link in src=) -->
        <video width="300" height="auto" loop autoplay muted>
            <source src="/videos/quick-reference-2.mp4" type="video/mp4">
        </video>
    </td>
  </tr>
</tb>

### Slide Jump
<br />
<tb style="width:100%; vertical-align: top">
  <tr style="font-size: 11px; font-weight: bold" bgcolor="232428">
    <td>DESCRIPTION</td>
    <td>INPUTS</td>
    <td>EXAMPLE</td>
  </tr>
  <tr>
    <td> 
      Jumping during a slide carries the slide momentum into the jump and amplifies it.
    </td>
    <td width="100px">
      1. Slide <br />
      2. Stop sliding <br />
      3. Press jump right after
    </td>
    <td width="200px">
        <video width="300" height="auto" loop autoplay muted>
            <source src="/videos/quick-reference-2.mp4" type="video/mp4">
        </video>
    </td>
  </tr>
</tb>

### Dash Jump
<br />
<tb style="width:100%; vertical-align: top">
  <tr style="font-size: 11px; font-weight: bold" bgcolor="232428">
    <td>DESCRIPTION</td>
    <td>INPUTS</td>
    <td>EXAMPLE</td>
  </tr>
  <tr>
    <td> 
      Dashing and then imputing a jump during the dash give a boost of horizantal, and vertical, momentum, at the cost of 2 stamina bars.
    </td>
    <td width="100px"> 
      1. Dash <br />
      2. Jump right after
    </td>
    <td width="200px">
        <video width="300" height="auto" loop autoplay muted>
            <source src="https://i.imgur.com/UR64fbd.mp4" type="video/mp4">
        </video>
    </td>
  </tr>
</tb>

### DSJ (Dash Slide Jump)
<br />
<tb style="width:100%; vertical-align: top">
  <tr style="font-size: 11px; font-weight: bold" bgcolor="232428">
    <td>DESCRIPTION</td>
    <td>INPUTS</td>
    <td>EXAMPLE</td>
  </tr>
  <tr>
    <td> 
      A DSJ is when you do a slide jump right after dashing. While a simple mechanic, has many use cases such as in 0-1.
    </td>
    <td width="100px"> 
      1. Dash <br />
      2. Slide <br />
      3. Stop sliding <br />
      4. Jump right after
    </td>
    <td width="200px">
        <video width="300" height="auto" loop autopla muted>
            <source src="https://i.imgur.com/UR64fbd.mp4" type="video/mp4">
        </video>
    </td>
  </tr>
</tb>

### Slam Store
Interrupting a slam with a wall jump stores the slam state without the downward speed.<br/>
Using jump, slide, or dive after landing in the Slam Store state allows reaching max slam momentum quickly. 

### Dives
Jump and then slide almost at the same time, slide jump that gives more height, gains both horizontal and vertical speed from slam momentum.

### Slideways
Holding either A or D (dependent on the diriction you are sliding) while sliding sideways increases your
horizontal speed by 5 units.

### Wall Bounces
Wall Jumping while in a slide reverses your direction and preserves your momentum.

### Bhop
Jumping on the frame you hit the ground to preserve all horizontal units. someone fact check that please lmao

### Dash Extension
Dash towards a ledge and slide as you go over it.

### Dash Extension Jump
Dash towards a ledge and slide as you go over it then jump.

### SSJ (Super Slide Jump)
After letting go of slide there is a 3 frame window (on 120 fps) where pressing jump will do a 
slide jump that adds either 24, 12 or 6 units to your speed depending on which frame you jump.<br/>
Entering the command “prefs set bool ssjIndicator true” into console (opened by pressing tilda) will tell you when you successfully ssj.

### Dive SSJ
	
### Wall SSJ
	
### Whip cancel
Punching or whiplashing during whiplash will cancel it, this can be used to make green hook points function as blue ones or for quickly reaching max jackhammer damage.

### Whip slamming
Slamming during a whiplash will not give downward speed but does build slam momentum.

<!---------------------------------------------->

## Weapon Movement Tech

### CE Boost (Core Eject Boost)
Tap slide and fire a core eject down at the same time, gives high horisantal speed.

### UB (Ultraboost)
Use the Malicious Railcannon on a core eject. This is the fastest method of movement in the game*. 
If the core is hit while it is very close to you it will deal 35 damage instead of 50, this requires firing malicious rail almost instantly after the core.

### Flick UB 
A faster method of ultra boosting that can be done in the air. Fire a core and dash at the same time, turn the camera 180 degrees, then fire the malicious railcannon.

### Chub (Checkpoint Ub)
Ultraboost, then checkpoint as you take damage from it. This gives you the UB's momentum after respawning.<br>
::: note
This is significantly easier to do on 120 FPS
:::

### Fup (Frozen Unfriendly Pull-it)
Fire a rocket then whiplash it, fast explosion boost that can be done midair

### Floor fup
With freezeframe, active while looking down, fire a rocket then whiplash it, launches straight up if not holding directional keys, otherwise launches in the direction you are moving.

### Rocket Ride
Activate freezeframe and shoot a rocket, jump, then slam. Works while grounded or to swap to a new rocket while already rocket riding.<br/>

### Instant Rocket Ride
Activate freezeframe, look very slightly down, then shoot and dash at the same time wait slightly then unfreeze, allows rocket riding quickly while mid air.

### Core Snipe Boosts
Fire a core eject in front of you, shoot it with the revolver then dash through it, you will get hit by the lasting hitbox and launched.<br/>
::: note
The height of the core when you shoot it is very lenient.
:::

### Duck Boosting
Shotgun primary fire pushes you forward slightly, can be used with [shotgun swapping](/guides/speedrun-tech.md#shotgun-swapping)

### Buffered Piercer
Holding left click while charging a piercer shot will fire it the instant it full charges.

<!---------------------------------------------->

## Combat Tech List:

### Shotgun Swapping 
Swapping to another shotgun after firing resets the cooldown.

### Projectile Boost
Punching with feedbacker as you fire the shotgun parries a bullet and causes it to explode on impact.

### Nukes
Firing a malicious railcannon at a core eject creates a very large and high damage explosion.

### Core Snipes
Firing a revolver at a core eject creates a large, red explosion.

### Over Pump Dodge
The blast from a fully charged green shotgun can be dodged by dashing.

### Fup (Frozen Unfriendly Pull-It)
Whiplash a rocket then freeze it, you need to be in the air when the rocket reaches you.<br/> 
This creates a large red explosion at the cost of 35 hp.

### Flayer Instas
Hitting a mindflayer with an explosion as it does the blue orbs attack, it will reflect the back projectiles at it, killing the mindflayer instantly.<br/>
Overpumps and nukes have a lasting explosion making the timing more lenient

### SRS Combo
At point blank fire a cannonball then punch with feedbacker slightly after, quick high damage, one taps virtues, cerberi, and sentries. 
If you get the +CANNONBOOST style bonus, you punched too soon. <br/>
You only need to charge srs cannon to 25% for full damage.

### Conduction in water
Jumpstart and electric railcannon automatically cause conduction instantly while underwater, with far greater range and self damage if you are touching the water.

### Rocket Traps
Placing a frozen rocket where an enemy will walk will let the rocket supercharge creating a red explosion.<br/>
If you instead place the rocket where an enemy spawns it will create a red explosion whether or not it supercharged due to enemies spawning slightly off the ground.

### Knuckleblast Cooldown Cancel
Using swap arm or whiplash will cancel the cooldown from a knuckleblaster shockwave.

### Overheat Quick Charge
Firing one blue saw fully charges the heat on the green sawblade.

<!---------------------------------------------->

## Coin Tech

### Split coins
Shooting a coin with the marksman revolver during the flash at the peak of its ark, or after it has started
making a humming sound while falling, will cause it to turn into two hitscans.

### Coin Punch
Punching a coin with the feedbacker at any point after the flash will send the coin into the nearest
enemy or wherever you are facing and make it bounce back into the air with a damage increase, its
damage caps after punching it into a surface 3 times

### Dead coins
Shooting a coin and shortly after firing a new coin will transfer the damage to the new coin and
compound it, allowing you to bypass the damage cap on coin punching.

### Multi Dead Coin
Firing multiple coins then shooting and firing a new coin will transfer all the damage of the
coins to the new one, this requires delaying firing the new coin slightly more than with only one coin

### Fast Coin
Redrawing marksman, causing the coin cooldown to be reset instantly. 
::: note
This can be done with a variation # bind
:::

### Slab Coins
When hittting a coin with the alternate Slab Piercer pistol.

### Railcoins 
Throw a coin through an enemy, then fire the electric rail. This will cause the rail to hit the enemy, then chain off the coin to hit it again. 

### Coin Add
Quickly swapping back to the Marksman allows you to add more coins after a railcoin.

### Ricostacks
If multiple hitscans hit a coin at the same time while in hitstop, they will both ricochet off the coin, the
same applies to a hitscan and a feedbacker punch or whiplash, this will also allow reusing the coin.

### Sludge

<!---------------------------------------------->

## Types of Oobs/Skips:

### Untagged wall clip
Certain walls are untagged and thus will not correct where the rocket launcher places you when
mounting a rocket, allowing you to teleport through them. Untagged walls can be identified by
whiplashing them; if the whiplash passes through, the wall is untagged.

### Whip Clip
Certain walls, primarily in the violence layer are thinner, and don’t destroy frozen rockets that are placed in them. 
Getting on a rocket that is in this state will clip the camera out of bounds, from on the rocket
looking down at about a 45 degree angle, then shooting a rocket, tapping whiplash and jump at the same time will clip you out.

### Tight Space Clips
Certain gaps in geometry that the player can’t normally fit through can be moved through by mounting
a rocket.

### Slide Clips
Certain gaps in geometry that the player can’t normally fit through can be moved through by spamming
slide, these clips are generally more consistent the higher your frame rate and the faster you mash slide.

### Trigger Skip
Some enemy spawn triggers are incredibly thin, and can be skipping by mounting a rocket that is placed
precisely due to mounting a rocket teleporting you slightly.

### Arch Clips

### Skuggle
bro wtf is a skuggle???

<!---------------------------------------------->

## Level Exits:

### CE Boost exit
[Ce boost](/guides/speedrun-tech.md#ce-boost-core-eject-boost) as the red door opens, place oil, [slide jump](/guides/speedrun-tech.md#slide-jump), and slam.

### Slam store exit
[Slam store](/guides/speedrun-tech.md#slam-store) off of the exit door, place oil, slide and use [slideways](/guides/speedrun-tech.md#slideways) for extra speed.

### Ub exit
Put your back to the exit door and [ultraboost](/guides/speedrun-tech.md#ub-ultraboost) as it opens, then quickly turn around and place oil, then slam into the exit or stand slightly
back from the door, as it opens [flick ub](/guides/speedrun-tech.md#flick-ub), then place oil, then slam into the exit.

### Dash Extension Exit
[Dash Extension](/guides/speedrun-tech.md#dash-extension) as the end door opens, then [slide jump](/guides/speedrun-tech.md#slide-jump) and slam.

### Sandwich exit