import { i18n } from '../../languages'
import { isUniqueLocale } from '../../lib/isUniqueLocale'
import { StringWithLimits } from '../../components/StringWithLimits'
import { Rule } from '@sanity/types'
import { WritingHand } from '../../components/twemoji'

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: WritingHand,
  i18n,
  initialValue: {
    __i18n_lang: i18n.base,
    __i18n_refs: [],
    publishedAt: new Date().toISOString()
  },
  groups: [
    {
      name: 'content',
      title: 'Content'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'social',
      title: 'Social'
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'content'
    },
    {
      name: 'publishedAt',
      title: 'Published on',
      type: 'datetime',
      options: {
        dateFormat: 'dddd, MMMM Do YYYY,',
        timeFormat: 'h:mm a',
        calendarTodayLabel: 'Today'
      },
      initialValue: new Date().toISOString(),
      group: 'settings'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'settings'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueLocale
      },
      // validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      group: 'settings'
    },
    {
      name: 'ogImage',
      title: 'Social image',
      type: 'image',
      description: 'Image for Facebook and Twitter share (1200 x 630px).',
      options: {
        hotspot: true
      },
      group: 'social'
    },
    {
      name: 'ogTitle',
      title: 'Social title',
      type: 'string',
      inputComponent: StringWithLimits,
      validation: (Rule: Rule) => Rule.max(70).warning("Some text won't be visible."),
      group: 'social'
    },
    {
      name: 'ogDescription',
      title: 'Social Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 125 characters.',
      validation: (Rule: Rule) => Rule.max(125).warning("Some text won't be visible."),
      group: 'social'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.title',
      media: 'image'
    },
    prepare: ({ title, author, media }) => {
      return {
        title,
        subtitle: author && `by ${author}`,
        media
      }
    }
  }
}