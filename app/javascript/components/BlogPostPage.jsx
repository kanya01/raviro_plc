import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const BlogPostPage = () => {
    useEffect(() => {
        const animateElements = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 100 * index);
            });
        };

        animateElements();
    }, []);

    // Sample blog post data - this would typically come from an API or CMS
    const post = {
        title: 'Implementation Research Explained: Bridging the Know-Do Gap',
        date: 'March 2, 2025',
        readTime: '6 min read',
        category: 'Research',
        author: 'Dr. Lucy Kanya',
        content: [
            {
                type: 'paragraph',
                content: 'Despite decades of public health research generating valuable evidence, a persistent gap remains between what we know works and what is actually implemented in real-world settings. This disconnect, often called the "know-do gap," is particularly pronounced in developing regions where resources are limited and systems are fragile.'
            },
            {
                type: 'paragraph',
                content: 'Implementation research has emerged as a critical discipline to address this challenge. But what exactly is implementation research, and why is it so essential for global health advancement?'
            },
            {
                type: 'heading',
                content: 'What is Implementation Research?'
            },
            {
                type: 'paragraph',
                content: 'Implementation research is the scientific study of methods to promote the systematic uptake of evidence-based interventions into practice and policy. Rather than focusing on developing new health interventions, implementation research examines how existing interventions can be successfully integrated into specific contexts.'
            },
            {
                type: 'paragraph',
                content: 'This field acknowledges that effective interventions often fail to achieve their potential impact when implemented in real-world settings. The approach is inherently practical, focusing on identifying and addressing barriers to implementation while leveraging facilitators that can enhance adoption and scale-up.'
            },
            {
                type: 'quote',
                content: 'The gap between what we know and what we do is lethal. Interventions that could save lives are available, but somehow the systems we have in place are not delivering them effectively to those who need them most.'
            },
            {
                type: 'heading',
                content: 'Key Components of Implementation Research'
            },
            {
                type: 'paragraph',
                content: 'Effective implementation research typically encompasses several key components:'
            },
            {
                type: 'list',
                items: [
                    'Context analysis: Understanding the unique cultural, economic, and systemic factors that influence how an intervention will be received and integrated',
                    'Stakeholder engagement: Involving all relevant parties, from community members to policymakers, in the research process',
                    'Mixed methods: Utilizing both quantitative and qualitative approaches to capture the full picture of implementation challenges',
                    'Adaptive design: Building flexibility into research protocols to respond to emerging findings and changing conditions',
                    'Focus on sustainability: Examining factors that contribute to long-term maintenance of interventions beyond initial implementation'
                ]
            },
            {
                type: 'heading',
                content: 'Why Implementation Research Matters for Global Health'
            },
            {
                type: 'paragraph',
                content: 'In resource-limited settings, the stakes of the know-do gap are particularly high. Consider maternal health interventions: we have evidence-based practices that can significantly reduce maternal mortality, yet these interventions often fail to reach those who need them most.'
            },
            {
                type: 'paragraph',
                content: 'Implementation research helps us understand why effective interventions don\'t always translate to real-world impact. Is it because of supply chain issues, provider knowledge gaps, community acceptance, or policy barriers? By identifying these specific challenges, targeted solutions can be developed.'
            },
            {
                type: 'paragraph',
                content: 'Perhaps most importantly, implementation research shifts the focus from simply generating evidence to actively promoting its use. This approach recognizes that knowledge alone is insufficient; we need systematic strategies to ensure knowledge is applied effectively in practice.'
            },
            {
                type: 'heading',
                content: 'Challenges and Opportunities'
            },
            {
                type: 'paragraph',
                content: 'While implementation research offers tremendous potential, the field faces several challenges:'
            },
            {
                type: 'list',
                items: [
                    'Methodological complexity: Implementation contexts are dynamic and multifaceted, requiring sophisticated research approaches',
                    'Funding gaps: Despite its importance, implementation research often receives less funding than discovery science',
                    'Capacity limitations: Many regions lack sufficient researchers trained in implementation science methods',
                    'Knowledge translation: Findings from implementation research must themselves be effectively disseminated and applied'
                ]
            },
            {
                type: 'paragraph',
                content: 'Despite these challenges, the growing recognition of implementation research\'s value creates new opportunities. Funders are increasingly prioritizing implementation considerations, and global networks of implementation researchers are expanding. Digital technologies also offer new tools for capturing and analyzing implementation data, potentially accelerating progress in the field.'
            },
            {
                type: 'heading',
                content: 'The Path Forward'
            },
            {
                type: 'paragraph',
                content: 'As we work to achieve global health goals, implementation research must be centered as a critical component of the research-to-practice pipeline. This means:'
            },
            {
                type: 'list',
                items: [
                    'Building implementation considerations into research from the beginning, rather than as an afterthought',
                    'Strengthening implementation research capacity in low and middle-income countries',
                    'Creating collaborative networks that connect researchers, practitioners, and policymakers',
                    'Developing innovative methods to capture implementation processes and outcomes'
                ]
            },
            {
                type: 'paragraph',
                content: 'By bridging the know-do gap, implementation research offers a path to maximizing the impact of our collective health knowledge. In a world of limited resources and persistent health inequities, we can\'t afford to leave this potential untapped.'
            },
            {
                type: 'paragraph',
                content: 'At Raviro, we\'re committed to advancing implementation research and supporting its application in developing regions. Through our knowledge hub and collaborative networks, we aim to contribute to a future where evidence-based practices routinely translate into improved health outcomes for all.'
            }
        ],
        relatedPosts: [
            {
                slug: 'evidence-based-practices',
                title: 'Five Ways to Improve Evidence-Based Practice in Global Health'
            },
            {
                slug: 'knowledge-translation',
                title: 'Knowledge Translation: Moving from Research to Policy'
            },
            {
                slug: 'community-engagement',
                title: 'The Role of Community Engagement in Sustainable Health Initiatives'
            }
        ]
    };
    if (!post) {
        return (
            <div className="min-h-screen flex flex-col bg-white">
                <Header />
                <main className="flex-grow pt-24 flex justify-center items-center">
                    <p>Loading post...</p>
                </main>
                <Footer />
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-24">
                <article className="py-16 px-4">
                    <div className="container mx-auto max-w-2xl">
                        {/* Article Header */}
                        <header className="mb-16 fade-in opacity-0 transition-all duration-1000">
                            <div className="mb-4">
                                <span className="text-xs text-blue-600 uppercase tracking-wider">{post.category}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-extralight text-gray-800 mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{post.date}</span>
                                <span className="mx-2">•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </header>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none">
                            {post.content.map((block, index) => {
                                const delay = 200 + (index * 50);

                                switch(block.type) {
                                    case 'paragraph':
                                        return (
                                            <p
                                                key={index}
                                                className="mb-6 text-gray-700 fade-in opacity-0 transition-all duration-1000"
                                                style={{ transitionDelay: `${delay}ms` }}
                                            >
                                                {block.content}
                                            </p>
                                        );
                                    case 'heading':
                                        return (
                                            <h2
                                                key={index}
                                                className="text-2xl font-light text-gray-800 mt-12 mb-6 fade-in opacity-0 transition-all duration-1000"
                                                style={{ transitionDelay: `${delay}ms` }}
                                            >
                                                {block.content}
                                            </h2>
                                        );
                                    case 'quote':
                                        return (
                                            <blockquote
                                                key={index}
                                                className="border-l-2 border-blue-400 pl-6 italic my-8 text-gray-700 fade-in opacity-0 transition-all duration-1000"
                                                style={{ transitionDelay: `${delay}ms` }}
                                            >
                                                {block.content}
                                            </blockquote>
                                        );
                                    case 'list':
                                        return (
                                            <ul
                                                key={index}
                                                className="list-disc pl-6 mb-6 space-y-2 text-gray-700 fade-in opacity-0 transition-all duration-1000"
                                                style={{ transitionDelay: `${delay}ms` }}
                                            >
                                                {block.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    default:
                                        return null;
                                }
                            })}
                        </div>

                        {/* Author Bio */}
                        <div className="mt-16 pt-8 border-t border-gray-100 fade-in opacity-0 transition-all duration-1000" style={{ transitionDelay: '1000ms' }}>
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                                    {post.author.split(' ').map(name => name[0]).join('')}
                                </div>
                                <div className="ml-4">
                                    <div className="font-medium text-gray-800">{post.author}</div>
                                    <div className="text-sm text-gray-500">Executive Director</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Related Posts */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-2xl fade-in opacity-0 transition-all duration-1000" style={{ transitionDelay: '1100ms' }}>
                        <h3 className="text-xl font-light text-gray-800 mb-8">
                            Related Articles
                        </h3>

                        <div className="space-y-6">
                            {post.relatedPosts.map((relatedPost, index) => (
                                <a
                                    key={index}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="block p-6 bg-white rounded-md hover:shadow-sm transition-shadow duration-300"
                                >
                                    <h4 className="text-lg font-light text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                        {relatedPost.title}
                                    </h4>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostPage;