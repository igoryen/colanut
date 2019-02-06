$( document ).ready( function(){
	// console.log("ready");

	var leadership = [

		// {
		// 	"id": "",
		// 	"name": "",
		// 	"title": "",
		// 	"desc": [
		// 		"aaa"
		// 		]				
		// },

		{
			"id": "tom",
			"name": "Tom McCormick",
			"title": "Founder & CEO",
			"desc": [
				"Tom McCormick is the Founder, President, and CEO of The Nationwide Group of Companies (TNG): <a href=\"#\">www.tngoc.com</a>",
				"TNG owns and operates a portfolio of leading financial technology companies that currently carries out business in 18 countries providing software solutions to global financial institutions ranging from: appraisal and valuation risk management with Nationwide Appraisal Services Inc. (NAS) and Connexions, defaulted debt recovery management with Nationwide Recovery Services L.P., property and mortgage legal closings with Nationwide Home Closing Services (HCS). and alternative energy for retrofitting real estate, Nationwide Energy Advisors.",
				"In 1996, Mr. McCormick founded Nationwide Appraisal Services Inc., which has since become an innovative and leading valuation technology company. The NAS brand has now grown throughout the Caribbean, Mexico, Central America and the United States and has become the global leader in valuation, risk management, and data analytics.",
			]
		},
		{
			"id": "rodrigo",
			"name": "Rodrigo Pinto, <small> CPA, CA</small>",
			"title": "Chief Financial Officer (CFO)",
			"desc": [
				"Rodrigo Pinto joined TNG as the CFO in October 2015 where he has led the finance and accounting departments. He plays a key role in developing our strategy, and establishing our governance, tax planning, and budgeting as we go through a period of change and rapid growth domestically and in international markets.",
				"Mr. Pinto brings with him over 16 years of finance and accounting knowledge and international experience with several multinational corporations in Brazil, the United States, and Canada including PricewaterhouseCoopers, Fannie Mae, and TD Bank. His most recent tenure was in the capacity of CFO and VP of Finance at MBAC Fertilizer Corp.",
				"He is a Chartered Accountant, a Certified Public Accountant in the United States, and holds the equivalent of a CPA designation in Brazil. ",
			]				
		},

		{
			"id": "tammy",
			"name": "Tammy Soliman",
			"title": "Chief Technology Officer (CTO)",
			"desc": [
				"Tammy Soliman joined TNG in January 2009 and successfully transitioned all technical development and support capabilities from an external IT solutions group to be permanently managed in-house, and he has been instrumental in building the organization's IT development team.",
				"Mr. Soliman brings with him over 15 years of professional experience in IT and has extensive background on building enterprise applications, data analytics, and warehousing solutions for various industries such as financial services, shipping, logistics, publishing, appraisal management, telecommunications, automobile and insurance. With his background in agile methodology, he has spearheaded and supervised various end-to-end technical development efforts from product inception through design and implementation.",
				"He currently holds professional certifications such as Oracle Certified Associate Java SE, Oracle PL/SQL Developer, Oracle Certified Professional Java SE and Java EE Web Component Developer, Certified Scrum Product Owner and Certified Scrum Master. Currently, he oversees all application development activities for new products as well as technical enhancements for all TNG applications."
			]
		},
		{
			"id": "eric",
			"name": "Éric-Vincent Kayigamba",
			"title": "Executive Vice President, International Sales",
			"desc": [
				"Eric Kayigamba joined the senior leadership team in the capacity of Sales Executive Vice President. Over the years, he has carried out the strategies to develop our valuation and recovery businesses through the operations of Nationwide Appraisal Services (NAS) and Nationwide Recovery Services (NRS). In his new role, Eric continues his focus to expand our existing business and lead our new initiatives in Canada and globally.",
				"Eric first joined NAS' team in 2007 as an Accounting Lead. His leadership, expertise, passion for excellence as well as his enthusiasm soon led him to the position of Quebec Regional Sales Manager and quickly catapulted him to Vice President, Eastern Canada. As Vice President of Eastern Canada, he was responsible for shaping and carrying out strategies for NAS and its sister company Nationwide Recovery Services (NRS) in Quebec and Atlantic provinces.",
				"Eric received a Bachelor's Degree in Business Management with a specialization in Finance at Université du Québec à Montréal. Upon completion of his studies, he entered the public sector in the Province of Québec where he amassed many years of experience and occupied several positions related to accounting and finance. In his spare time, Eric is very involved in his community as he's currently sitting on the Board of Directors of Partage Action / West island Community."
				]				
		},
		{
			"id": "marc",
			"name": "Marc Sykes",
			"title": "Vice President, Product and Corporate Development",
			"desc": [
				"Marc Sykes joined TNG in 2017 with a focus on leading the development of our product and solution platforms across the business and building new data-driven analytical tools.",
				"Over the course of his career, Marc has proven to be an effective leader with a strong track record of growing product lines and business units. He has additional expertise in strategic partnerships and alliances, as well as in leading key change initiatives across organizations.",
				"Prior to joining TNG, Marc led product development and operations teams that worked across real estate industry segments including financial services, real estate brokers and developers, utility providers and all levels of government. He gained expertise in products such as automated valuation models, house price indices, predictive scores and models and market intelligence solutions for real estate professionals.",
				"Mr. Sykes holds a joint MBA from the Kellogg School of Management (Northwestern University) and the Schulich School of Business (York University), as well as numerous product and project management designations.",
				]
				
		},
		{
			"id": "rudy",
			"name": "Rudy Naraine",
			"title": "Senior Executive National Manager, Broker Services",
			"desc": [
				"Rudy Naraine has over 15 years experience leading and growing business units through strategic account and relationship development. He is a highly energetic individual with a passion for assisting his clients, and has worked for organizations in both the Canadian and U.S. mortgage industry. Rudy brings with him a broad base of experience across sales, marketing, operations and customer service.",
				"Email: <a href=\"mailto:Rudy.Naraine@tngoc.com\">Rudy.Naraine@tngoc.com</a>",
				]				
		},
		


		{
			"id": "matt",
			"name": "Matt Angus, <small>LL.B. / J.D.</small>",
			"title": "General Counsel",
			"desc": [
				"Matt Angus is TNG’s General Counsel, joining the leadership team in 2016.",
				"Mr. Angus has over 15 years of legal and business experience both as a member of a leading transaction law firm at Goodmans LLP, and through his in-house experience as the General Counsel of Summit REIT, at that time one of the largest public real estate investment trusts in Canada. Matt has also provided legal expertise to a multinational real estate investment management organization as he held both the General Counsel and Chief Compliance Officer positions at ING Real Estate Investment Management, a member of the global ING Group of companies.",
				"In his General Counsel roles, Mr. Angus has often been involved more directly in the business affairs of the organizations, designing and implementing operational, compliance and legal risk management processes and procedures, structuring and negotiating key business arrangements including joint venture agreements, and assisting with change management as the organizations have grown.",
			]
		},

		{
			"id": "ainsley",
			"name": "Ainsley Major",
			"title": "Senior Director, Operations",
			"desc": [
				"Ainsley is a University of Guelph graduate who started her career with Nationwide Appraisal Services in 2011. Prior to TNG Ainsley worked in leadership development and program planning with Seneca College.",
				"Ainsley has worked in a multitude of functions at TNG before moving to her current role as Senior Director of Operations. Ainsley previously focused her time on new initiatives in the Caribbean, Mexico and the United States; her passion, enthusiasm and execution techniques have allowed her to be successful in the project management of the international expansion of TNG. Ainsley’s experience in different markets has allowed her to now focus on the domestic and international operations of TNG. Her commitment to excellence has allowed her to develop new strategies to improve the client experience and manage an effective operation.",
				"A recent graduate of the project leadership program through Cornell University, Ainsley continuously works towards improving our client experience, product development and effective appraisal management for our present and future clients, across all our markets and for all our business lines.",
				]
				
		},
		{
			"id": "colleen",
			"name": "Colleen Colman",
			"title": "Director, Human Resources",
			"desc": [
				"Colleen joined TNG in 2015 and brings a fresh perspective to Human Resources Management within the organization. Her passion for developing organizations, teams and people allow Colleen to play a key role in supporting TNG's growth.",
				"Colleen brings over 20 years of HR Management experience in the IT, Manufacturing and Environmental industries. Colleen's areas of experience and expertise include: HR project management and implementation, employee and labour relations, compliance and legislation, full cycle recruitment & selection, change management, coaching and organizational development.",
				]				
		},
		{
			"id": "hermina",
			"name": "Hermina Birtocean",
			"title": "Director, Finance",
			"desc": [
				"Hermina joined Nationwide Appraisal Services in 2007, and has brought extensive accounting and financial management experience coupled with her strengths in economics, process management and strategic planning. Today, as the Director of Finance for The Nationwide Group, Hermina ensures that the overall management of the accounting department aligns with long-term corporate objectives as the company continues to grow.",
				"Prior to joining Nationwide Appraisal Services, Hermina held senior accounting and finance roles at private sector firms in Eastern Europe while she continued her studies toward obtaining her Masters of Business Development.",
				"Hermina holds CPA and CGA professional designations.",
				]				
		},
		{
			"id": "deb",
			"name": "Deb Seeler",
			"title": "Senior Executive Account Manager",
			"desc": [
				"Deb Seeler joined NAS as an Account Manager in 2004 after a twenty-year career with a major Canadian Financial Institution. Her background includes various management roles in retail banking, with an emphasis on mortgage lending and credit. Deb’s extensive careers in both banking and appraisal management gives her a unique insight into the industry and the ability to provide her clients with service and solutions specifically tailored to their needs. As a NAS Account Executive over the last 10 years, Deb has managed the Head Office relationships with both TD Canada Trust and Scotiabank and was instrumental in the launch of Scotia International.",
				"Email: <a href=\"mailto:deb.seeler@nationwideappraisals.com\">deb.seeler@nationwideappraisals.com</a>",
				]				
		},
		
		{
			"id": "deb",
			"name": "Deb Seeler",
			"title": "Lorem ipsum dolor",
			"desc": [
				"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
				"In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
				"Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
				]				
		},
		{
			"id": "ella",
			"name": "Ella Chan",
			"title": "Director, Product Development",
			"desc": [
				"Ella joined Nationwide Appraisal Services in 2001, and has been instrumental in evolving the company’s product line to build what is now The Nationwide Group (TNG).",
				"Ella worked in a multitude of functions at TNG before moving to her current role as Director of Product Development, where she is responsible for product strategy and execution. Ella works closely with major clients, partners, and internal teams to define product features and requirements. ",
				"She remains heavily involved in the overall success of TNG’s current product offerings and spearheads the research and design efforts for new products and any enhancements to existing products across all business lines. Ella leads an agile team of product managers, business analysts and Technical Level 2 support specialists.",
				"Ella holds Project Management Professional (PMP) and Certified Scrum Product Owner (CSPO) professional designations.",
				]				
		},
		{
			"id": "elsa",
			"name": "Elsa Carter",
			"title": "Senior Executive Account Manager",
			"desc": [
				"Elsa brings over 20 years’ experience in the financial service industry. As a financial professional, working with Canada’s largest mortgage insurance provider, Elsa held leadership roles in National Strategic Client Management, Underwriting Operations, Community Development, International Relations, Marketing and Communications as well as Default Management.",
				"As a dynamic leader with excellent interpersonal skills, Elsa will continue to build and maintain strong alliances with key clients to drive strategic objectives for all The Nationwide Group (TNG) business lines in current and future markets.",
				"Email: <a href=\"mailto:elsa.carter@nationwideappraisals.com\">elsa.carter@nationwideappraisals.com</a>",
				]				
		},
		{
			"id": "karen",
			"name": "Karen Yolevski, <small>LL.B.</small>",
			"title": "President HCS and NRS",
			"desc": [
				"Karen initially joined The Nationwide Group to lead Nationwide Home Closing Services, an innovative, technology-driven closing solution for home refinance, purchase and sale transactions. She now also leads Nationwide Recovery Services, Nationwide’s automated end-to-end debt recovery offering for lenders, lawyers and recovery-related service providers.",
				"Karen brings with her over 10 years of combined legal and business experience in the areas of technology, real estate, telecommunications and financial services. Prior to joining The Nationwide Group, she was Vice President, Chief Legal Counsel of Flexiti Financial, a Canadian FinTech responsible for launching Canada’s first virtual private label credit card. Before moving in-house Karen spent seven years in private practice and was a partner at a full-service law firm in Toronto.",
				"Karen received a bachelor’s degree in communications from York University in 2002 and her LL.B. from Osgoode Hall Law School in 2005.",
				]				
		},
		{
			"id": "kate",
			"name": "Kate Townshend",
			"title": "Executive Account Manager",
			"desc": [
				"Kate Townshend has over 9 years of Experience in the Real Estate Industry in Ontario and Quebec. She has also worked as a National Account Executive In the advertising and broadcasting field. Kate understands the fast-paced Toronto market and believes that constant communication is the key to success. Kate is able to provide her clients with industry knowledge, as well as offer unrivalled client service. Her priority is to exceed client’s expectations!",
				"Email: <a href=\"mailto:kate.townshend@nationwideappraisals.com\">kate.townshend@nationwideappraisals.com</a>",
				]				
		},
		{
			"id": "patrick",
			"name": "Patrick Ardies",
			"title": "Regional Vice President, Western Canada",
			"desc": [
				"Patrick brings to NAS more than 20 years of experience in the financial services industry and a breadth of market knowledge and expertise to the Nationwide team. Patrick is a passionate and customer centric professional dedicated to excellence in client solutions. His experience includes Business Development, and Retail Lending with Leading financial institutions, as well as Sales and Operations Management with a focus on Appraisal and Risk Management at Solidifi. Patrick is leading Regional Sales efforts for Western Canada.",
				"Email: <a href=\"mailto:patrick.ardies@nationwideappraisals.com\">patrick.ardies@nationwideappraisals.com</a>",
				]				
		},
		{
			"id": "robert",
			"name": "Robert Ip",
			"title": "Vice President of Sales, TNG",
			"desc": [
				"Robert Ip joins the Nationwide Group of Companies as a senior member, reporting to the President of Nationwide Home Closing, and Nationwide Recovery Services. Robert is responsible for strategy, new initiatives & development, and leadership of TNGOC’s strategic partnerships, lender community, and real estate professionals both domestic and international.",
				"Robert has over twenty-five years of financial services and management experience, with over 10 years of indemnity insurance experience in various senior management, and business development roles. Robert is passionate for developing resourceful solutions that assist organizations with their growth and development, while focusing on a seamless customer experience promoting customer loyalty and brand affinity.",
				"Robert holds a Masters of Business Administration from Queen’s University (2008). And has earned his certification as a Certified Management Consultant in 2016. Robert is a Chartered Professional Accountant (2014), and a Certified Management Accountant (2011) in Canada.",
				"Email: <a href=\"mailto:Robert.IP@tngoc.com\">Robert.IP@tngoc.com</a>",
				]				
		},
		{
			"id": "elizabeth",
			"name": "Elizabeth Cantave",
			"title": "Regional Account Manager",
			"desc": [
				"Elizabeth has over 15 years of experience in client relations. In the past, she worked for different financial institutions as a mortgage representative. She understands the mortgage market and are able to identify customer needs and exceed client expectations. Elizabeth is a bilingual, dynamic professional with strong interpersonal skills who only has the best interests of her clients in mind. Elizabeth believes in a continuous-improvement approach to deliver a superior client experience.",
				"Email: <a href=\"mailto:elizabeth.cantave@nationwideappraisals.com\">elizabeth.cantave@nationwideappraisals.com</a>",

				]				
		},
		{
			"id": "shane",
			"name": "Shane Martin",
			"title": "Executive Vice President, Strategy and Business Development, InHouseUSA",
			"desc": [
				"Shane joined InHouseUSA in November 2016 as Executive Vice President of Strategy and Business Development, providing strategic direction for growth to the company. He will combine his large experience in mortgage technology and AMC space with the InhouseUSA executive teams’ passion to create a new experience in the valuations process for the lenders and the borrowers.",
				"Having been in the mortgage industry for over 23 years, Shane brings with him a deep understanding of the trials and tribulations of all levels and positions in the production of a mortgage. He has held positions ranging from mortgage loan officer to regional vice president with a 13-state reach, from wholesale to retail, from production to operations. His 5-year tenure at Streetlinks also brings a much-needed perspective to creating a new experience in the valuations space.",
				]				
		},
		{
			"id": "alberto",
			"name": "Alberto J. González Becerra",
			"title": "Executive Vice President, Sales, Latin America",
			"desc": [
				"Alberto has more than 18 years of experience in Mexico's real estate sector; particularly 15 years within the Banking industry – Banamex, Citigroup and Scotiabank – and vast knowledge in appraisal management, mortgage, commercial lending, credit risk, collateral management and construction. He has a degree in Architecture and a Masters in Real Estate Valuation, besides other courses in Leadership and Coaching.",
				"Alberto actively contributes in Mexico's Banks Association where in 2011, he assumed the role of VP of Relations and Diffusion for the Appraisers Association of Mexico City (SAVAC).In 2012, he held the same position within the Appraisal Units Association in Mexico (ANUVAC), always trying to contribute to the valuation community.",
				"Alberto joins Nationwide Appraisal Services as the Executive Vice President for Latin America, responsible for the company's expansion project to Spanish speaking countries. His mandate is to develop the sales and operations for both Nationwide Appraisal Services (NAS) and Nationwide Recovery Services (NRS), to offer our clients solutions to mitigate the credit risk through effective appraisal and adjudicated real estate management."
				]				
		},
		{
			"id": "al",
			"name": "Al Yeargin, <small>SRA</small>",
			"title": "Chief Appraiser, Connexions",
			"desc": [
				"Al joined Connexions in 2012 as Chief Appraiser, bringing 35 years of experience in the appraisal industry. He oversees appraisal reviews and reviewers, maintains the fee panel appraiser list, oversees state and federal compliance (licensing, AMC regulation, surety bonds) and authors internal policies and procedures for escalation matters.",
				"Al received his Senior Residential Appraiser (SRA) designation from the Appraisal Institute in 1988 and is a Certified Residential Appraiser in Florida and Virginia. He is also a member of NEFAR Board of Realtors (Jacksonville, Florida), a Special Magistrate for the Value Adjustment Board (Duval County, State of Florida), an Expert Witness (Duval County, Florida), and a Fee Panel Appraiser for the Veterans Administration (2005).",
				"Prior to joining Connexions, Al managed appraisal panels for a national AMC, was Regional Appraisal Manager for national lending institutions, and accumulated over 15 years of fee appraisal experience in Florida, Utah, and California."
				]				
		},
		{
			"id": "brad",
			"name": "Brad Harden",
			"title": "Senior Manager, Appraiser Relations",
			"desc": [
				"Brad joined The Nationwide Group in 2012.  During his tenure, he has become well accustomed to several lines of business at TNG. His skills in vendor management and customer relations made him an asset during the early inception period of the Caribbean and United States expansions. His experience in these markets has led him to be a well-rounded part of the leadership group. He has a strong leadership style with a proven ability to lead a large group of individuals.",
				"Today as Senior Manager of Appraiser Relations, Brad is continuously working on ways to improve our vendor relations while keeping our clients needs in mind. He is involved in many initiatives that are aimed at improving efficiencies for our appraiser community which will in turn improve our client experience.",
				]				
		},
		{
			"id": "newton",
			"name": "Newton Sebastiyan",
			"title": "Senior Manager, Operations",
			"desc": [
				"Newton Sebastian is a York University graduate who started his career with Nationwide Appraisal Services in 2010.  During his tenure Newton has worked in and managed all departments within Operations.  As a veteran member of the Operations team, Newton’s understanding of the industry has led him to develop numerous policies, procedures and efficiencies that help drive the Operations team.",
				"Today as Senior Manager of Operations, Newton is committed to delivering an excellent client experience as he continues to work on ways to change, improve and build upon practises that suit the needs of our Clients and our Appraisers.",
				]				
		},
		{
			"id": "justin",
			"name": "Justin Harris",
			"title": "Vice President, Business Development, InHouseUSA",
			"desc": [
				"Justin Harris joined InHouseUSA as the Vice President of Business Development in January of 2017. Justin will be leading a business development team focused on client acquisition and retention.",
				"Justin brings with him nearly 10 years of experience in the valuation space. His most recent position being with SettlementOne as the Director of Strategic Accounts where he ran their outside salesforce focusing on client retention and acquisition.  Justin spent over 7 years with Assurant Valuations, FKA Streetlinks, where Justin worked closely with ownership and the sr. executive team. Justin created and maintained relationships with many of the top 30 lenders throughout the US.",
				]				
		},
		{
			"id": "david",
			"name": "David Vitale",
			"title": "Executive Vice President, Sales",
			"desc": [
				"David Vitale joined Solutions in February 2018 as Senior Vice President of Business Development.  He is a seasoned executive with over 20 years in mortgage, finance, and software experience. With positions at Ellie Mae and Appraisal Scope, he has been concentrated in SaaS for the mortgage industry over the past 6 years. Most recently David helped grow Appraisal Scope into a national presence before it was acquired. Leveraging old relationships while building new ones, David will be responsible for national accounts. When he is not working, David enjoys hiking, motorcycles, and supporting the New England Patriots. Originally from Boston, David now resides in San Diego, California with his wife and two dogs.",
				]				
		},
		{
			"id": "katie",
			"name": "Katie Villalta",
			"title": "Director, Marketing",
			"desc": [
				"As Marketing Director, Katie is responsible for managing and performing need assessments and developing solutions for organizational leaders and business partners. With an adaptive and innovative approach to project planning and execution, she holds an excellent reputation and a strong rapport with all TNG branches. She brings more than ten years of extensive experience in advertising, project management, and leading multidisciplinary teams in the successful completion of complex projects.",
				"Since joining TNG in early 2018, she has instilled a fresh approach to the organization’s marketing and branding initiatives. Her role is pivotal to the success of effectively managing projects by working closely with corporate leadership and multiple teams across the organization, as well as setting expectations on deadlines and accomplishing successful deliveries. She also plays a key role in rapid growth domestically and internationally.",
				"Katie approaches all projects with a strong strategic focus and an emphasis on team building while always maintaining a clear path towards achieving project goals. With an adaptive and innovative approach to project planning and execution, she holds an excellent reputation and strong rapport with management, colleagues, and external agencies. Prior to joining TNG, Katie worked with some of Canada’s biggest brands in the automotive, financial, retail and travel industries. Katie received her bachelor’s degree in business management and administration, specializing in finance, from Western University in 2008, holds PMP and CSM designations, and has pursued training in user experience.",
			]				
		},
		{
			"id": "nick",
			"name": "Nick Tsotsos",
			"title": "Director, Operations",
			"desc": [
				"As Director, Nick’s key functions include operational management, implementation of business solutions, and fostering customer loyalty. Prior to joining TNG, Nick was Director, Operations at an international agency. He has successfully developed and implemented numerous strategies to achieve best-in-class results within various portfolios assigned to his control, including legal and mortgage categories (for Canadian and United States markets). With twenty years of experience, Nick brings a deep and broad level of knowledge in driving and sustaining operational efficiencies.",
			]				
		},
		{
			"id": "todd",
			"name": "Todd Young",
			"title": "Senior Manager, Appraiser Development & Vendor Acquisition",
			"desc": [
				"As Senior Manager, Todd is an integral member of The Nationwide Group (TNG) and responsible for appraisal quality and compliance, recruiting and training, and development and management of a vendor incentive program. While overseeing the Appraiser Review team, Todd’s mandate includes the development of long-term education, mentorship, training and succession planning for vendors in markets in which TNG is present. Todd primarily oversees Nationwide Appraisal Services (NAS) in Canada as well as Nationwide Home Closing Services (HCS) and Nationwide Recovery Services (NRS). With 10 years of experience in the financial services and mortgages industries, with more than 8 years dedicated to appraisal and vendor management specifically, Todd is a key contact for multiple stakeholders including governing bodies, industry partners, and regulatory boards.",
			]				
		},
		{
			"id": "carl",
			"name": "Carl Blagrove",
			"title": "Account Manager, Sales",
			"desc": [
				"Carl is an Account Manager in the Sales Department at The Nationwide Group (TNG). He joined TNG in 2018 after holding key positions with many Canadian banks, lending institutions, insurers and title companies. He has also gained valuable experience as a Corporate Security Analyst, Assistant Manager, and held the position of Business Development Mortgage Manager with an international bank for ten years. With more than 18 years of experience in the banking and mortgage brokerage industries, Carl understands the dynamics of compliance and default management, and how they help to drive strategic objectives.",
				"Keen on providing clients, both large and small, with daily hands-on service, Carl prepares insightful recommendations, and timely and creative solutions to meet their unique and varied needs. He is a well-rounded individual focused on customer relationship building. And with strong leadership qualities and a friendly personality, Carl continues to successfully attract and retain key partnerships to help grow TNG’s portfolio of clients.",
				"Email: <a href=\"mailto:carl.balgrove@tngoc.com\">Carl.Balgrove@tngoc.com</a>",
			]				
		},
		{
			"id": "gabriel",
			"name": "Gabriel Avila",
			"title": "President of Sales, Latin America",
			"desc": [
				"Gabriel Avila is Vice President of Sales for TNG’s Latin America division. He joined the organization in 2018 to help grow the business with the responsibilities of acquiring new customers and maintaining stronger relationships with current accounts. Beginning his career more than twenty years ago, Gabriel has led many teams in selling and implementing successful projects for the financial industry in Mexico, and today provides valuable experience and shares extensive knowledge of technology and banking practices. Prior to joining TNG, Gabriel worked at Accenture, Experian, and Banco Vepormas, and has been a keynote speaker at many conferences, including the Anti Money Laundering workshop at the Universidad Anáhuac. Gabriel holds a bachelor's degree in Industrial Engineering and an MBA from the University of Texas. Since 2009, he has also held a PMP designation from the Project Management Institute.",

				"Email: <a href=\"mailto:Gabriel.avila@tngoc.com\">Gabriel.Avila@tngoc.com</a>",
			]				
		},
		{
			"id": "irma",
			"name": "Irma Montenegro",
			"title": "Director of Sales, Latin America",
			"desc": [
				"Irma Montenegro is a fifteen-year veteran of the financial industry. As the Director of Sales for TNG’s Latin American division, Irma brings significant experience, solid industry relationships, and a deep knowledge of the many unique countries within the region. She is responsible for coordinating sales strategies for the organization's expansion into Spanish-speaking countries while accelerating lead generation and prospecting. Her extensive background includes credit and collections, investments, and mortgages while working at American Express, HSBC, and Scotiabank. She was also part of several teams in charge of implementing BPO services at HSBC, Scotiabank, and INDRA, and worked extensively as an external consultant for the \"Transformation Project\" at HSBC with the vision to optimize processes through integration of new platforms and technology initiatives.",
				"We are pleased to announce that Irma Montenegro has joined NAS as the Director of Sales, Latin America. With over 15 years of experience in the financial industry, Irma will be a great addition to our growing Latin American department.",
				"Email: <a href=\"mailto:Irma.monenegro@tngoc.com\">Irma.Monenegro@tngoc.com</a>",
			]				
		},

	];

	$modal = $("#myModal");
	var modal = document.getElementById('myModal'); // Get the modal



	$modal_closer = $modal.find("span.closemodal");
	$modal_closer.on("click", function(){
		$modal.hide();
		$( "body" ).removeClass("modal-open");
	});


	$teammember = $(".teammember");

	$teammember.each( function(){
		// console.log( $( this ).find(".photograph").attr("id") );

		var pid = $( this ).find(".photograph").attr("id");
		// console.log( pid );

		var presult = $.grep( leadership, function(e){ 
			return e.id == pid; 
		});

		// console.log( presult[0].name);

		$( this ).find(".fullname").append( presult[0].name );
		$( this ).find(".jobtitle").append( presult[0].title );






	});



	$(".teammember").hover(
		function(){
			// console.log("in");
			$( this )
			.find(".arrowsign").css(
				{
					// "opacity": 1,
					"transform": "translateX(6px)"

				}
			);
			$( this ).find(".photograph").css({
					"-webkit-border-radius": "0%",
		            "-moz-border-radius": "0%",
		            "-ms-border-radius": "0%",
		            "-o-border-radius": "0%",
		            "border-radius": "0%",
		            // "background-color": "yellow"
		        }
			);
			
		},
		function(){
			// console.log("out");
			$( this )
			.find(".arrowsign").css(
				{
					// "opacity": 0,
					"transform": "translateX(0)"

				}
			);
			$( this ).find(".photograph").css({
					"-webkit-border-radius": "50%",
		            "-moz-border-radius": "50%",
		            "-ms-border-radius": "50%",
		            "-o-border-radius": "50%",
		            "border-radius": "50%",
		            // "background-color": "#FFF"
		        }
			)
			
		}
	);

	$(".photograph").on( "click", function(){
		// console.log("id: " + $( this ).attr("id"));
		// console.log( "pic" + $( this ).find("img").attr("src") );

		var picpath = $( this ).find("img").attr("src") ;
		// console.log("picpath: " + picpath)
		var id = $( this ).attr("id");


		

		var result = $.grep( leadership, function(e){ 
			return e.id == id; 
		});

		// person's photo
		$photo = $("<img>").attr("src", picpath)

		// person's story
		$descrip = $("<div>").attr("class", "desc-wrapper");
		
		$name = $("<div>").attr("class", "modal-member-name").html( result[0].name);
		$title = $("<div>").attr("class", "modal-member-title").html( result[0].title);

		$nametitle = $("<div>").attr("class", "modal-name-wrapper");

		$nametitle.append( $name, $title );


		$descrip.append( $nametitle );

		$lines = $("<div>").attr("class", "modal-bio-wrapper");

		for (var i = 0; i < result[0].desc.length; i++) {
			var $line = $("<div>").attr("class", "bio-paragraph").html( result[0].desc[i] );
			$lines.append( $line );
		};

		$descrip.append( $lines );

		// console.log(result[0]);
		$modal.find("#pic").html("").append( $photo );
		$modal.find("#desc").html("").append( $descrip );
		

		
		if ( $( window ).width() <= 600 ) {
			var badphotos = [
				"deb", 
				"patrick", 
				"elizabeth",
				"shane",  
				"alberto",
				"lance",
				"marc"
			];

			var superbadphotos = [
				"al", 
				"justin",

			];
			//--- TODO 1: remove after photos are updated --
			// if( badphotos.includes( id ) ) { // dumb IE11 doesn't understand this
			if(badphotos.indexOf( id ) >= 0) {
				$("#pic").find("img").css({
						"height": "10em",
						"right": "-2px"
					}
				);
			}

			// if( superbadphotos.includes( id ) ) { 
			if(superbadphotos.indexOf( id ) >= 0) {
				$("#pic").find("img").css({
						"height": "8.2em",
						"right": "10px"
					}
				);
			}
			//--- EO TODO 1 -----------------------
			// alert(" less!")
			$modal.fadeIn( 50, function(){
				// alert("now")
				var f = 3; // f for "factor"
				$(".modal-content").height( $( window ).height() - (50*f) );
				$(".modalwrapper").height( $( window ).height() - (51*f) );
				$(".desc-wrapper").height( $( window ).height() - (60*f) );
				$(".modal-bio-wrapper").height( $( window ).height() - $(".modal-name-wrapper").height() - (70*f) );

			});
			

		}
		else {
			// alert("not less!")
			$modal.show().css("display", "flex");
		}

		
		$( "body" ).addClass("modal-open");

	});

	
	window.onclick = function(event) {
		console.log("window.click")
	    if (event.target == modal) {
	        $modal.hide(); // When the user clicks anywhere outside of the modal, close it
	        $( "body" ).removeClass("modal-open");
	    }
	}



});