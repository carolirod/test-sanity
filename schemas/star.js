export default {
  name: 'star',
  title: 'Star',
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
