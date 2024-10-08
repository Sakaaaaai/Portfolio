import { Book, Code, Beaker } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

function Skills() {
  const skillCategories = [
    {
      category: "教育",
      icon: <Book className="w-6 h-6" />,
      skills: [
        { name: "問題作成", level: 90 },
        { name: "教育哲学", level: 85 },
        { name: "指導法", level: 80 },
      ]
    },
    {
      category: "フロントエンド",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 80 },
      ]
    },
    {
      category: "研究",
      icon: <Beaker className="w-6 h-6" />,
      skills: [
        { name: "深層学習", level: 75 },
        { name: "SLAM", level: 70 },
        { name: "ロボット工学", level: 80 },
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-4">
              <CardHeader className="flex items-center space-x-2">
                {category.icon}
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
