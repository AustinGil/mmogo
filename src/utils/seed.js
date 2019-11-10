// Script to seed the DB
const url = "https://jsonbox.io/box_0188e512abb08a7bd5e7";

const data = [
  {
    title: "Protecting Against Lions",
    content: `Garbage decomposes at wildly different rates. For instance, a banana peel takes about a month, while rubber takes about 70 years and a plastic holder can take 500 years. Landfills are dirty, smelly eyesores that are quickly becoming overcrowded and releasing methane gas into the atmosphere, while incineration releases carbon dioxide and other pollutants into the air. With the proper disposal methods, you can reduce your garbage impact while effectively removing it from your life.
  Step 1
  Sort your garbage into a few different bins. This can be done quickly by setting up a multi-storage bin in your kitchen so items can be sorted as they are disposed.
  Step 2
  Bring any garbage that can be reused, such as toys or clothing, to a secondhand store to be resold.
  Step 3
  Take recyclables such as glass, plastics and paper to a local recycling center. If your neighborhood has a recycling pick-up, leave it out in the front of your house in plastic bins. Don't use plastic garbage bags as this only contributes to the waste.
  Step 4
  Turn food and garden waste into compost. You can do this with a simple compost pile, or speed things up with a compost bin filled with worms that will digest the trash and do the work for you. Once it's completely composted, you can use it in your garden as a rich fertilizer.
  Step 5
  Collect any remaining garbage into a trash bag and place it into a garbage bin. Remember to seal the top so that animals won't be able to get into it. Leave the bin in sight for garbage collectors on your pick up day.`,
    image: "https://img.hunkercdn.com/630x/photos.demandstudios.com/227/131/fotolia_2882168_XS.jpg",
    categories: ["waste-disposal", "agriculture", "conservation", "how-to"],
    author: "Misty.Wittenburg@hunker.com"
  },
  {
    title: "The African Conservation Foundation Endorsement",
    content: `I am greatly encouraged by the work of the African Conservation Foundation for they are motivated by the idea that nature and our environment are an essential gift that we need to protect for future generations. After all, what would life be without a clean, healthy and sustainable environment?
  It remains my dream that my own country, Tibet, should be an area of ahimsa or non-violence and conservation in the heart of Asia. I believe that the African Conservation Foundation's aim to unite and support people who work in these fields in Africa shows an understanding of the need to cultivate non-violent relations with our human brothers and sisters as wel as the other sentient being with whom we share the earth.
  In the past, ignorance and a lack of respect for the environment led to widespread destruction. By seeking to create avenues of communication, education and co-operation using today's technology, the African Conservation Foundation is providing an opportunity for us to make up for past mistakes and for the better side of human nature to prevail."
  His Holiness The Dalai Lama
  His Holiness is the spiritual leader of the Tibetan people.`,
    image:
      "https://africanconservation.org/wp-content/uploads/2014/03/his_holiness_the_dalai_lama_endorsement.gif",
    categories: ["conservation"],
    author: "me@dalailama.com"
  },
  {
    title: "Facts on Farming In Africa",
    content: `1.  The Sahara Desert is growing. A future threat to farmers is the Sahara, the world's largest hot desert. While most deserts' boundaries expand and contract seasonally, data collected over the past 100 years shows that the Sahara grew by at least 11 percent and now takes up 3.6 million square miles of Northern Africa. As the places where people farm grow drier, famine and drought become more of a risk.
      1.  Sub-Saharan Africa contains 19 of the 25 poorest countries in the world. This includes the Central African Republic, which is nearly self-sufficient in crops but ranks as the poorest country in Africa (681 GDP) due to poor livestock quality. Overall, this "horn" of the African continent contains a population of 626 million people, and 384 million—or 61 percent—of them are farmers.
      2.  Roughly 65 percent of Africa's population relies on subsistence farming. Subsistence farming, or smallholder agriculture, is when one family grows only enough to feed themselves. Without much left for trade, the surplus is usually stored to last the family until the following harvest. While subsistence farming is appealing to rural farmers because it allows families to be self-sufficient, it is heavily susceptible to climate change and works best when there is no drought or flood, which usually isn't the case.
      3.  Farmers suffer from Africa's loss of share in world trade. Unfortunately, there are higher trade taxes placed on the continent compared to other regions. This is due to roads that lead toward ports rather than other countries, as well as rigorous tariffs and inspection laws between borders. Working to boost intra-African trade, regional economic communities (RECs) face immense challenges and policymakers are focusing on RECs in order to increase regional integration.
      4.  Africa's common cash crops are cocoa, cotton and coffee. Initially, cocoa was as a smallholder crop but has grown in popularity due to global demand. Robusta is a typical coffee bean grown in Africa, commonly used for instant coffee. It faces competition with the higher quality Arabica beans exported from Asia and South America. Overall, the exposure of cash crops to the world market has expanded growth in Africa but also slowly eroded farmer incomes. Cash crop farmers receive very small proportions of the final traded price.
      5.  Women make up the largest share of the agricultural labor force in Africa. Although they produce 80 percent of the continent's food, they are excluded from determining agricultural policies and certain laws deprive them of their land and livelihood. The UN's Food and Agriculture Organization has estimated that if women were given the same access to productive resources as men, crop yield could be increased 20 to 30 percent—in turn, reducing the number of world hunger up to 17 percent. https://www.farmafrica.org/what-we-do-1/women-in-the-field
      6.  Africa has the largest number of child labor, and the agriculture sector accounts for most of it. In sub-Saharan Africa, child labor increased over the 2012 to 2016 period, in contrast to continued progress in the rest of the world. Most child labor is unpaid, going on in family farms and not between employment with a third-party.
      7.  Countries with high child labor rates, like Cote D'Ivoire and Ghana, also report high school attendance rates at 90 percent. Families that do subsistence farming anecdotally report high career aspirations for their children. The high child labor rates are not necessarily an alternative to school, but an act performed for the necessary family income that leads to subsistence and high attendance rates. In a sense, child work often contributes to improving the family farm that they may eventually inherit.
      8.  Focus on agribusiness can help improve the lives of farmers. The African Center for Economic Transformation (ACET) promotes a focus on the chain of process: land tenure, farming technology, markets and pricing. Agribusiness also involves technology, such as mobile apps used as a means to reach farmers and track data on land conditions. By turning farming into an entrepreneurial endeavor, agribusiness could create the mass number of jobs needed for Africa's youth.
      9.  By increasing local production of chemical fertilizers, the lives of African farmers could improve. Globally, Africa consumes only one percent of fertilizer and produces even less. With high costs and short supply, African farmers pay up to six times the average price for fertilizer. If a farmer is living on one dollar a day, imported fertilizer is unaffordable. Increasing local production of fertilizer would reduce costs and shorten the supply chain to farmers.`,
    image: "https://borgenproject.org/wp-content/uploads/10-Facts-About-Farming-in-Africa-2.jpg",
    categories: ["agriculture", "enterprise"],
    author: "isadora@borgenproject.org"
  },
  {
    title: "How to Farm Efficiently",
    content: `As a small farmer, you know too well that there's never enough time or money to do all of the things you need to do. So, you need solutions that help you do more with less. Here are 10 tools, systems, and processes to help you be more efficient on your farm.
  1. Mechanize your planting
  Chances are you've seeded a row crop by hand at one point or another. Tough work, right? With a row crop planter, you can cut the work considerably — and you'll end up with straight rows of seedlings all growing at the same time. Use an Earthway row crop planter to plant sweet corn, radish, leeks, spinach, and much more.
  2. Mechanize your harvesting
  Harvesting greens by hand is just as labor intensive as planting them! That's why Jonathan Dysinger invented the Quick Cut Greens Harvester. It harvests up to an incredible 175 lbs greens per hour and it only takes a single person. You'll save a ton of time.
  3. Spin your salad
  When you need to harvest, wash, dry, and bag greens quickly, every minute counts. That's where a 5-gallon (or bigger) salad spinner comes in handy. The Dynamic Salad Spinner is as affordable as they come (without making your own), and you can manually spin dry up to eight heads of lettuce at once.
  4. Flame your weeds
  Weeds happen. But don't let them take time away from actually growing and harvesting your crops. Instead, invest in a flame weeder. This tool burns emerging weeds with a small flame, causing enough damage at the cellular level to prevent further growth. Check out the Red Dragon Backpack Flame Weeder.
  5. Accelerate your compost
  Shorten organic decomposition time with a compost accelerator. Saltwater Farms' accelerator powder contains billions of microbes, bran, and seaweed that feed your compost pile and encourage it to break down organic matter faster. Bonus: when you add compost to your beds, it automatically increases water holding capacity, which reduces water use.
  6. Plant cover crops
  In addition to compost, cover crops are a great way to build your soil's fertility without chemicals. Need more nitrogen in your soil? Plant clover. Need to break up compacted clay in your beds? Plant a grass, like winter rye. Cover crops help you save water to boot.
  7. DIY a walk-in tunnel
  A hoophouse is great for four-season growing. But if you don't need or can't afford one quite yet, a DIY walk-in tunnel will do the trick. Depending on the growing season in your area, the biggest benefit of a walk-in tunnel is starting crops earlier in the season and growing them later. It also protects crops from insects and disease. Here's how to DIY a "good enough" walk-in tunnel.
  8. Optimize your irrigation system
  Unless you're harvesting rainwater, you're paying for water usage on your property. Obviously, water usage is crucial for growing crops — but do you need as much as you're currently using?
  Think of a drip irrigation system as a water delivery system customized to the plant's needs. Not only does it send water straight to the roots, it also produces less runoff and evaporation. This saves you both money and water waste.
  Modern Farmer shares an excellent guide on how-to build your own drip irrigation system. Or skip the DIY version and buy everything you need from the folks at Dripdepot.
  9. Invest in a good tractor
  Yes, a tractor is a considerable upfront expense — a BCS America tractor ranges between $1,000 and $5,000. However, if you're planting and replanting throughout the season, let a tractor take the brunt of the work — not your back.
  10. Upgrade your cold storage
  Finally, how would you like to harvest crops when both you and they are ready, rather than just right before market? One of the easiest ways to make your small farm more efficient is by upgrading your postharvest cold storage using a CoolBot controller  or CoolBot Pro and an air conditioner. Both will keep your produce at a cool 38°F to 40°F, save you money, and are super easy to set up.  The CoolBot Pro is WiFi enabled, allowing you to remotely monitor your cooler and receive critical alerts if your cooler gets too hot or too cold or if your cooler loses power.  Peace of mind for $0.13 a day.`,
    image: "https://www.teatown.org/wp-content/uploads/2019/08/fresh-2386786_1280.jpg",
    categories: ["agriculture"],
    author: "kirsta@composting.com"
  },
  {
    title: "Cashew Farming",
    content: `I have lived in Kenya all my life. I have 15 cashew trees. My parents grew them. In this area everyone grew cashew trees. They did it for the future generations to benefit from. Ten years ago my trees were producing very nicely. However today the produce from these cashews is so little. It's not enough for selling. The trees do not produce enough – they are too old. I was even planning on cutting down my old trees because they're not producing. My income is very low - sometimes we borrow money from friends to survive. Sometimes we go without and sometimes my children are sent back home from school because we can't pay the fees.
  I feel really bad about it when my kids are sent home from school. Sometimes I cannot concentrate on my own work, because I cannot provide for their breakfast or lunch, I really feel bad about it – that they're at home...I really want to give my children a quality education.
  I joined the Farm Africa project recently. Farm Africa explained their ideas and I wanted to get involved.
  I will get training in finance and technical training in cashew nut farming. I will have access to new seedlings which are drought resistant - here when you expect rain, that's when it doesn't come!
  With high-quality seedlings, it will be easy to grow enough produce. And I will know how to sell the produce and earn an income.
  I have encouraged the community to join the project as well because there is a need for collective development. I wanted us to develop as a whole village.
  By being involved in the project, we will produce many cashews and sell them, and we will be able to take care of school fees, and have a good diet. Now my family always just eats cornmeal and locally found greens. With more money we would eat rice, chicken and beef. We'd have more variety!
  There is light at the end of the tunnel with the project. Without the project there would be no light, and my life would be much worse. At the moment, we're living from hand to mouth. With the project, I can have some savings.`,
    categories: ["agriculture", "business"],
    author: "matana@farmafrica.org"
  },
  {
    title: "How to Build a House Cheaply",
    content: `It's possible to build a house cheaply as long as you aren't placing a value on the time you spend doing it, because the key to building cheaply is doing most of the work yourself--which means spending at least 2 hours working per square foot. In addition to saving a lot of money, you'll always have a wonderful feeling of self-accomplishment when you look at the house that you built with your own two hands. Read the steps below for some proven ways to reduce your building costs.
  Step 1
  Keep your house design simple. Design the house to use standard-sized building materials. A two-story house is cheaper to build than a one-story house that has the same living area.
  Step 2
  Choose inexpensive materials. Cover the roof with galvanized sheets. Use shelves instead of cabinets in the kitchen. Buy low-end windows and doors. Use pine or vinyl for the floors, rather than hardwood or carpet.
  Step 3
  Use recycled materials. Check eBay or your local classifieds. Visit local auctions and houses where people are remodeling.
  Step 4
  Eliminate unnecessary rooms and services. A cheap house will have only one bathroom, no garage and a wood stove for heat rather than a furnace.
  Step 5
  Buy the cheapest lumber you can find. Look for a local sawmill that sells native wood. If you have usable trees on your property, you can rent a portable sawmill to make your own lumber or hire someone to do it for you.
  Step 6
  Build the house close to the road on well-drained land. You want the shortest distance possible between the nearest utility pole and your house. If you are not able to build where you can get town water and sewer, well-drained land allows you to build the cheapest septic system possible.
  Step 7
  Build as much of the house yourself as you can. Do the carpentry and finish work on your own. Code may require you to have the septic system, wiring and lights professionally installed. You may also want to have professionals build your foundation and grade the lot.`,
    image: "https://img.hunkercdn.com/630x/cpie/images/a04/k4/16/build-house-cheaply-800x800.jpg",
    categories: ["how-to", "infrastructure"],
    author: "caron@hunker.com"
  },
  {
    title: "Snake Bites",
    content: `Early access to medical care in a health facility that has personnel trained and capable of diagnosing snakebite envenoming is essential. This means, a health centre which is equipped with the basic resources needed to provide immediate emergency treatment needs, including the administration of antivenom and other adjunct therapy.
  People who suspect they have been bitten by a venomous snake should be transported to a health facility without delay. First aid should be applied. Traditional medicines and other treatments such as wound incision or excision, suction, or application of "black stones" should be avoided.
  Many people die every year on the way to a health facility as a result of being transported lying flat on their backs and having their upper airway obstructed by vomit, or paralysis of muscles in the tongue. Keep them on their left side with mouth turned down so that the risk of this is reduced.
  Health facilities should treat all snakebite cases as emergencies and give priority to assessing these patients and instituting treatment without delay.
  Improving the clinical outcomes for the victims of snake bite needs much more than just access to safe antivenoms. Intravenous access should be achieved early, hydration state determined and corrected if needed, and vital signs must be closely monitored. The early administration of an adequate dose of effective antivenom to patients with signs of envenoming is crucial. If no antivenom is available, referral to a centre which has supplies should be planned and undertaken quickly. If this is not possible then symptomatic treatment including support of airway patency and breathing, maintenance of circulation and control of bleeding, and the treatment of local wounds should be prioritized as appropriate.
  Administered early, antivenoms are not just life-saving, but can also spare patients some of the suffering caused by necrotic and other toxins in snake venom, leading to faster recovery, less time in hospital and a more rapid transition back to a productive life in their communities. But the reality for many patients is that early access to antivenom is simply not possible for a multitude of reasons. As a consequence, these patients do not receive the full potential benefit of antivenom, and some of the effects of the snake venom may not be neutralized effectively, leading to prolonged illness, slower recovery and greater risk of disability. For those affected by toxins that cause paralysis, sustained airway and breathing assistance using either manual resuscitators or mechanical ventilators may be necessary. Patients bitten by snakes with venom that affects normal blood clotting may have a higher risk of internal bleeding into the brain and other organs, and those affected by dermonecrotic toxins will experience more severe local tissue damage.`,
    image: "https://www.theanimalspot.com/wp-content/uploads/2019/01/kingcobrasmall.jpg",
    categories: ["health"],
    author: "wanda@gmail.com"
  }
];

fetch(url, {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(data)
});
