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
                  buildHookId: '5e21e73cfe52e0cc5c9c4952',
                  title: 'Sanity Studio',
                  name: 'sanity-page-studio',
                  apiId: '2a7c9deb-816e-45ca-9542-6e8188681fe8'
                },
                {
                  buildHookId: '5e21e73cedb1bdbc86db7af3',
                  title: 'Landing pages Website',
                  name: 'sanity-page',
                  apiId: '6c11bbb7-21a2-41f0-9aa3-479e70b7e549'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aet2505/sanity-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-page.netlify.com', category: 'apps'}
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
