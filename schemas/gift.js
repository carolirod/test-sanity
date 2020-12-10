export default {
  name: 'gift',
  title: 'Gift',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
