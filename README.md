# lego-minifig-generator
Randomly generates lego minifigures.


The idea is to create a random svg lego minifigure kind of like the [https://robohash.org]
 A long way to go till its finished though...

## API is on [generator.berekett.me/api](https://generator.berekett.me/api)
It's on render's free tier servers so, it might be unresponsive or slow at times

## Website is on [easteregg.berekett.me](easteregg.berekett.me)

![image](https://user-images.githubusercontent.com/49443576/189523202-4bac64d9-ecc3-4795-8f71-3629fdef9500.png)

### Also - If you're not interested in the The Infinite Improbability Drive, then set your values

- You can set the skin color of the lego using `skin` query param ( for example :- http://generator.berekett.me/api?skin=530000 , where 530000 is the hex code for the color). Make sure you didn't add hashtag '#' sign as that's not permitted   
- You can set the torso color of the lego using `torso` query param ( for example :- http://generator.berekett.me/api?torso=530000 , where 530000 is the hex code for the color). Make sure you didn't add hashtag '#' sign as that's not permitted   
- You can set the pants color of the lego using `pants` query param ( for example :- http://generator.berekett.me/api?pants=530000 , where 530000 is the hex code for the color). Make sure you didn't add hashtag '#' sign as that's not permitted 
- You can combine them as well. Which would render the whole randomness to nil ( http://generator.berekett.me/api?skin=530000&torso=495400 )