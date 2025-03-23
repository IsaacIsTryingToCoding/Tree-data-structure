const TreeNode = require('./TreeNode');

const menu = new TreeNode('Menu');

const entries = {
  'Breakfast' : [ 'Cereal', 'BBQ Chicken', 'Oatmeal' ],
  'Lunch' : [ 'Soup', 'Sandwich', 'Lasagna' ],
  'Dinner' : [ 'Yogurt', 'Filet Mignon', 'Fish Florentine' ]
};

const meals = Object.keys(entries);
for (let meal=0; meal < meals.length; meal++){
  menu.addChild(meals[meal]);
  const entrylist = entries[meals[meal]];
  entrylist.forEach( entry => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();

const breakFastNode = menu.children[0];
const LunchNode = menu.children[1];
const dinnerNode = menu.children[2];

breakFastNode.removeChild('BBQ Chicken');
dinnerNode.removeChild('Yogurt');

breakFastNode.addChild('Yogurt');
dinnerNode.addChild('BBQ Chicken');
console.log('\nCorrected Menu');
menu.print();

menu.depthFirstTraversal();
