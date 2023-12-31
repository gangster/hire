import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Josh Deeden',
			social: {
				github: 'https://github.com/gangster',
				linkedin: 'https://www.linkedin.com/in/jdeeden/',
			},
			sidebar: [
				{ label: 'Resume', link: '/resume' },
				{
					label: 'Challenges',
					items: [
						{
							label: "Challenges Overview", link: "/challenges"
						},
						{
							label: 'Google Forms Killer',
							items: [
								{ label: 'The Challenge', link: '/challenges/google-forms-killer/challenge' },
								{ label: 'Assumptions', link: '/challenges/google-forms-killer/assumptions' },
								{ label: 'Product Requirements', link: '/challenges/google-forms-killer/product-requirements' },
								{ label: 'Technical Requirements', link: '/challenges/google-forms-killer/technical-requirements' },
								{ label: 'Edge Cases', link: '/challenges/google-forms-killer/edge-cases' },
								{ label: 'Data Model', link: '/challenges/google-forms-killer/data-model' },
								{ label: 'Future Enhancements?', link: '/challenges/google-forms-killer/future' },
							],
						},
						{
							label: 'Function Refactor',
							items: [
								{ label: 'The Challenge', link: '/challenges/function-refactor/challenge' },
								{ label: 'The Code to Refactor', link: '/challenges/function-refactor/code' },
								{ label: 'Solution Overview', link: '/challenges/function-refactor/solution' },
								{ label: 'Refactored Code', link: '/challenges/function-refactor/refactored' },
								{ label: 'Unit Tests', link: '/challenges/function-refactor/tests' },

							],
						},						
					],
				},
			],
		}),
	],
});
