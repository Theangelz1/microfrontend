/**
 * Meta JS File that will be picked up by the Vue CLI
 */
 module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string', // Question type
      required: true, // Is question Required
      message: 'Project name' // Question it's self
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Awesome Project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    },
    addon_navigator: {
      type: 'confirm',
      required: true,
      default: true,
      message: 'Configure Addon Language?'
    }
  },

  /**
   * You can add a custom complete message
   */
  completeMessage: 'Project Complete!'
};