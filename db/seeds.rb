# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Users

frank = User.create!(username: "Frank",
              password: "password",
              )

guest = User.create!(username: "Guest",
              password: "password",
              )

jason = User.create!(username: "Jason",
              password: "iamjason!",
              )

alex = User.create!(username: "Alex",
              password: "alexisawesome",
              )

george = User.create!(username: "George Paul",
              password: "pindianaacers",
              )

carmella = User.create!(username: "Carmella",
              password: "allemraC",
              )

fj = User.create!(username: "Franc Jameso",
              password: "James Franco",
              )

jenn = User.create!(username: "Jennifer",
              password: "password",
              )

ken = User.create!(username: "Ken",
              password: "password",
              )

#Routes

route1 = Route.create!(
  name: "Taraval",
  description: "Uphill through Taraval Street",
  author_id: frank.id,
  distance: 2.51046061325278,
  coordinates: ["37.74165803972163,-122.50734329223633,37.74308336068553,-122.47584342956543,37.754417078948194,-122.47644424438477"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.74165803972163,-122.50734329223633&markers=color:red|37.74308336068553,-122.47584342956543&markers=color:red|37.754417078948194,-122.47644424438477&path=37.74165803972163,-122.50734329223633|37.74308336068553,-122.47584342956543|37.754417078948194,-122.47644424438477"
)

route2 = Route.create!(
  name: "19th to Beach",
  description: "This run will push you to your limits. It goes through the entire sunset",
  author_id: ken.id,
  distance: 5.22764316727873,
  coordinates: ["37.76554550807942,-122.47713088989258,37.73446314357213,-122.4752426147461,37.73412374440858,-122.49378204345703,37.75346701353821,-122.49532699584961,37.75272052501486,-122.50845909118652"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.76554550807942,-122.47713088989258&markers=color:red|37.73446314357213,-122.4752426147461&markers=color:red|37.73412374440858,-122.49378204345703&markers=color:red|37.75346701353821,-122.49532699584961&markers=color:red|37.75272052501486,-122.50845909118652&path=37.76554550807942,-122.47713088989258|37.73446314357213,-122.4752426147461|37.73412374440858,-122.49378204345703|37.75346701353821,-122.49532699584961|37.75272052501486,-122.50845909118652"
)

route3 = Route.create!(
  name: "Mission to Portrero",
  description: "This is a fun run from Mission to Portrero. Lots of interesting stuff along the way!",
  author_id: carmella.id,
  distance: 2.4266957389196,
  coordinates: ["37.764188472211366,-122.43202686309814,37.76547765687739,-122.41074085235596,37.76154218065187,-122.40996837615967,37.76228858016506,-122.39829540252686,37.75733506071372,-122.39786624908447"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.764188472211366,-122.43202686309814&markers=color:red|37.76547765687739,-122.41074085235596&markers=color:red|37.76154218065187,-122.40996837615967&markers=color:red|37.76228858016506,-122.39829540252686&markers=color:red|37.75733506071372,-122.39786624908447&path=37.764188472211366,-122.43202686309814|37.76547765687739,-122.41074085235596|37.76154218065187,-122.40996837615967|37.76228858016506,-122.39829540252686|37.75733506071372,-122.39786624908447"
)

route4 = Route.create!(
  name: "Sunset Boulevard",
  description: "This run goes through Sunset Boulevard in the Sunset District",
  author_id: george.id,
  distance: 2.07936245589505,
  coordinates: ["37.76445988137693,-122.4965500831604,37.73446314357213,-122.49406099319458"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.76445988137693,-122.4965500831604&markers=color:red|37.73446314357213,-122.49406099319458&path=37.76445988137693,-122.4965500831604|37.73446314357213,-122.49406099319458"
)

route5 = Route.create!(
  name: "Ocean Beach",
  description: "A nice linear path down ocean beach",
  author_id: jason.id,
  distance: 1.64980310471637,
  coordinates: ["37.76452773351271,-122.5095534324646,37.74077568441835,-122.50680685043335"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.76452773351271,-122.5095534324646&markers=color:red|37.74077568441835,-122.50680685043335&path=37.76452773351271,-122.5095534324646|37.74077568441835,-122.50680685043335"
)

route6 = Route.create!(
  name: "Richmond Run",
  description: "Run through Richmond District",
  author_id: fj.id,
  distance: 3.16325900031714,
  coordinates: ["37.78671204340963,-122.45264768600464,37.78915394596523,-122.43239164352417,37.775790325191224,-122.42981672286987,37.77280522701264,-122.44972944259644"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.78671204340963,-122.45264768600464&markers=color:red|37.78915394596523,-122.43239164352417&markers=color:red|37.775790325191224,-122.42981672286987&markers=color:red|37.77280522701264,-122.44972944259644&path=37.78671204340963,-122.45264768600464|37.78915394596523,-122.43239164352417|37.775790325191224,-122.42981672286987|37.77280522701264,-122.44972944259644"
)

route7 = Route.create!(
  name: "Down the Embarcadero",
  description: "Run by the bay!",
  author_id: george.id,
  distance: 1.21861368568282,
  coordinates: ["37.79491922903296,-122.39406824111938,37.80332895277907,-122.40102052688599,37.80807595466228,-122.40848779678345"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.79491922903296,-122.39406824111938&markers=color:red|37.80332895277907,-122.40102052688599&markers=color:red|37.80807595466228,-122.40848779678345&path=37.79491922903296,-122.39406824111938|37.80332895277907,-122.40102052688599|37.80807595466228,-122.40848779678345"
)

route8 = Route.create!(
  name: "19th Ave to the Beach",
  description: "A long but fun downhill run",
  author_id: guest.id,
  distance: 5.22764316727873,
  coordinates:["37.76554550807942,-122.47713088989258,37.73446314357213,-122.4752426147461,37.73412374440858,-122.49378204345703,37.75346701353821,-122.49532699584961,37.75272052501486,-122.50845909118652"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.76554550807942,-122.47713088989258&markers=color:red|37.73446314357213,-122.4752426147461&markers=color:red|37.73412374440858,-122.49378204345703&markers=color:red|37.75346701353821,-122.49532699584961&markers=color:red|37.75272052501486,-122.50845909118652&path=37.76554550807942,-122.47713088989258|37.73446314357213,-122.4752426147461|37.73412374440858,-122.49378204345703|37.75346701353821,-122.49532699584961|37.75272052501486,-122.50845909118652"
)

route9 = Route.create!(
  name: "Around Richmond",
  description: "A run around Richmond District",
  author_id: guest.id,
  distance: 3.16325900031714,
  coordinates: ["37.78671204340963,-122.45264768600464,37.78915394596523,-122.43239164352417,37.775790325191224,-122.42981672286987,37.77280522701264,-122.44972944259644"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.78671204340963,-122.45264768600464&markers=color:red|37.78915394596523,-122.43239164352417&markers=color:red|37.775790325191224,-122.42981672286987&markers=color:red|37.77280522701264,-122.44972944259644&path=37.78671204340963,-122.45264768600464|37.78915394596523,-122.43239164352417|37.775790325191224,-122.42981672286987|37.77280522701264,-122.44972944259644"
)

route10= Route.create!(
  name: "Golden Gate Bridge",
  description: "A beautiful run across the Golden Gate Bridge!",
  author_id: frank.id,
  distance: 1.44678,
  coordinates: ["37.808402299831634,-122.47756004333496,37.829149805157726,-122.4796199798584"],
  map_url: "https://maps.googleapis.com/maps/api/staticmap?size=500x500&key=AIzaSyApIfSmh05sKYDsD506WRgLPeQihGFVLyI&markers=color:red|37.808402299831634,-122.47756004333496&markers=color:red|37.829149805157726,-122.4796199798584&path=37.808402299831634,-122.47756004333496|37.829149805157726,-122.4796199798584"
)

#Comments
Comment.create!(
  author_id: ken.id,
  route_id: route2.id,
  body: "Wow! That was really intense!"
)

Comment.create!(
  author_id: jenn.id,
  route_id: route2.id,
  body: "I agree! But that was such a great workout!"
)

Comment.create!(
  author_id: frank.id,
  route_id: route3.id,
  body: "That was fun!"
)

Comment.create!(
  author_id: george.id,
  route_id: route7.id,
  body: "I saw seels at the pier!"
)

#Completions

Completion.create!(
  user_id: frank.id,
  route_id: route1.id
)

Completion.create!(
  user_id: guest.id,
  route_id: route1.id
)

Completion.create!(
  user_id: jenn.id,
  route_id: route2.id
)

Completion.create!(
  user_id: ken.id,
  route_id: route2.id
)

Completion.create!(
  user_id: alex.id,
  route_id: route1.id
)

Completion.create!(
  user_id: guest.id,
  route_id: route10.id
)

Follow.create!(
  follower_id: 1,
  followee_id: 5
)

Follow.create!(
  follower_id: 4,
  followee_id: 3
)

Follow.create!(
  follower_id: 2,
  followee_id: 1
)
