export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4c399462f93fa001138d9d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-obtyezse',
                  apiId: '2f0cfacd-9f41-4cfb-bde9-d15cfa20edaa'
                },
                {
                  buildHookId: '5e4c399562f93f7b6f138dad',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mc336fb8',
                  apiId: '0633ae65-ab5a-4a89-8b43-4e8b2062512f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FemtiGram/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mc336fb8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
