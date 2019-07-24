module.exports = {
  DEFAULT_DATA: { root: true, todo: [], done: [] },
  // add
  ADD_EMPTY_ITEM: 'You forgot the item description',
  ADD_SUCESSFULLY_ADDED: item =>
    `✅ Successfully added '${item}' in your todo list`,

  // clean
  CLEAN_EMPTY_LIST: 'Which list do you want to clean?',
  CLEAN_PROMPT_MSG: (isAllLists, list) =>
    `🤔  Are you sure you want to delete ${
      isAllLists ? 'ALL items' : `all ${list} items`
    }? (Yes/No)`,
  CLEAN_INCORRECT_INDEX: (index, listName) =>
    `⚠️  Does not exists an item with ID '${index}' in ${listName} list`,
  CLEAN_ALL_LIST_BAD_INDEX:
    '⚠️  If you want to clean all lists, you dont have to pass an index',

  // done
  DONE_INCORRECT_INDEX: index =>
    `⚠️  Does not exists an item with ID '${index}'`,
  DONE_ITEM_MARKED: index => `✅  Item ${index} has been marked as done`,
  DONE_PROMPT_MSG: '🤔  Are you sure you want to mark all items as done? (Yes/No)',
  DONE_ALL_MARKED: '✅  All items marked successfully',

  // edit
  EDIT_EMPTY_ID: '⚠️  Do you forgot add an item id?',
  EDIT_INCORRECT_ID: '⚠️  Add a valid id from a todo item',
  EDIT_EMPTY_DESC: '⚠️  Do you forgot add an item description?',
  EDIT_INCORRECT_DES: '⚠️  Add a valid description',
  EDIT_SUCCESSFULLY_EDITED: '✅  Item description successfully edited',

  // list
  LIST_EMPTY: '📭 Empty lists',
  LIST_TODOS: todos => `📆 Todo\n${todos}`,
  LIST_DONES: dones => `✅ Done\n${dones}`,
};
