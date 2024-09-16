import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      <div className="flex justify-center mb-8">
        <Image
          src="/assets/profileImageRWS.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full"
          onError={(e) => {
            console.error("Error loading image:", e);
            e.currentTarget.src = "/placeholder.jpg";
          }}
        />
      </div>

      <header className="text-center">
        <h1 className="text-4xl font-bold">Roman Penn</h1>
        <p className="text-xl text-gray-600">Software Development Engineer</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>
          Highly motivated Software Development Engineer with a strong foundation in computer science and a passion for learning new technologies. Experienced in full-stack development, cloud computing, and machine learning. Skilled in creating efficient, scalable solutions and collaborating in cross-functional teams.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">Software Engineer Contractor - Bynaus</h3>
            <p className="text-gray-600">November 2023 - Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="pl-1">Developed responsive web application for construction companies to track time and jobs for employees using React, Node, Express, AWS, and MongoDB.</li>
              <li className="pl-1">Implemented state management using Redux and Context API</li>
              <li className="pl-1">Collaborated with designers to create user-friendly interfaces</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Software Engineer Contractor - Mason Claims</h3>
            <p className="text-gray-600">January 2024 - Present</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="pl-1">Redesigned the company's main website using React and Material UI</li>
              <li className="pl-1">Created a display that shows the status of claims in real time using React, Node, Express, and MongoDb</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Software Development Engineer, L5 - Amazon</h3>
            <p className="text-gray-600">December 2021 - November 2023</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="pl-1">Developed and maintained high-traffic web applications using Java, Spring Boot, and AWS</li>
              <li className="pl-1">Implemented RESTful APIs and microservices architecture</li>
              <li className="pl-1">Collaborated with cross-functional teams to deliver features and resolve production issues</li>
              <li className="pl-1">Implemented CI/CD pipelines using AWS CodePipeline and CodeBuild</li>
              <li className="pl-1">Spearheaded automation initiatives, developing Python scripts that streamlined tasks, code deployments, and cloud infrastructure, resulting in notable productivity gains.</li>
              <li className="pl-1">Worked on 35 code bases in Java, Angular, React/Typescript, and Python, completing 15 significant projects.</li>
              <li className="pl-1">Implemented uniting testing strategies using Java and Javascript, elevating code coverage to 84% and reducing production issues by 23%, enhancing overall software quality and reliability.</li>
              <li className="pl-1">Designed a table using Ag-Grid and React that displayed real time data on on hand inventory for multiple storefronts allowing mangers to create orders on the fly and reducing the complexity of manging inventory.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Software Engineer - Accenture</h3>
            <p className="text-gray-600">August 2021 - December 2021</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="pl-1">Resolved user interface issues, significantly reducing customer support inquiries.</li>
              <li className="pl-1">Leveraged Java and SQL on backend applications for faster data retrieval on a 30-year-old codebase, demonstrating technical prowess and problem-solving skills.</li>
              <li className="pl-1">Converted six applications from Angular to React/Typescript frontends while maintaining compatibility with their Python and Java backends.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Network Developer - Spectrum Enterprise</h3>
            <p className="text-gray-600">July 2020 - August 2021</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li className="pl-1">Developed 37 Python scripts for router upgrades, reducing technician visits and enhancing network management.</li>
              <li className="pl-1">Implemented NFV and SDN for automation, improving service deployment efficiency for network devices.</li>
              <li className="pl-1">Contributed 120+ commits and four merges in GitLab, demonstrating high-volume code production and integration.</li>
              <li className="pl-1">Created Service Mapper script for resource mapping, improving service differentiation on shared circuits.</li>
              <li className="pl-1">Completed 160 Jira tickets, showcasing effective problem-solving and task management.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C++</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Spring Boot</li>
          <li>Django</li>
          <li>Flask</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CI/CD</li>
          <li>Git</li>
          <li>RESTful APIs</li>
          <li>Microservices</li>
          <li>Agile/Scrum</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>DynamoDB</li>
          <li>Elasticsearch</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>React Native</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium">Coding Bootcamp Certificate</h3>
          <p className="text-gray-600">University of Texas at Austin - Austin, TX</p>
          <p className="text-gray-600">Graduation: August 2019</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Certifcate in Software Development</h3>
          <p className="text-gray-600">California Institue of Arts & Technology- National City, CA</p>
          <p className="text-gray-600">Graduation: November 2021</p>
          <p className="text-gray-600">GPA: 3.0</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Certifcate as Computer Technician</h3>
          <p className="text-gray-600">California Institue of Arts & Technology- National City, CA</p>
          <p className="text-gray-600">Graduation: March 2021</p>
          <p className="text-gray-600">GPA: 3.9</p>
        </div>
        </div>
      </section>

    </div>
  )
}
