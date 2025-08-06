"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Target, Plus, MoreHorizontal, Calendar, User, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

interface Objective {
  id: string
  title: string
  description: string
  assignee: string
  priority: "Low" | "Medium" | "High"
  status: "Not Started" | "In Progress" | "Completed"
  dueDate: string
  progress: number
  createdAt: string
}

const teamMembers = [
  "Alice Johnson",
  "Bob Smith", 
  "Carol Davis",
  "David Wilson",
  "Emma Brown"
]

const priorityColors = {
  Low: "bg-green-100 text-green-800 border-green-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200", 
  High: "bg-red-100 text-red-800 border-red-200"
}

const statusColors = {
  "Not Started": "bg-gray-100 text-gray-800 border-gray-200",
  "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
  "Completed": "bg-green-100 text-green-800 border-green-200"
}

const statusIcons = {
  "Not Started": AlertCircle,
  "In Progress": Clock,
  "Completed": CheckCircle2
}

export default function TeamObjectivesApp() {
  const [objectives, setObjectives] = useState<Objective[]>([
    // Software Development & Engineering
    {
      id: "1",
      title: "Implement new user authentication system",
      description: "Upgrade the current authentication to support OAuth and two-factor authentication for better security.",
      assignee: "Alice Johnson",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-15",
      progress: 60,
      createdAt: "2024-01-10T10:00:00.000Z"
    },
    {
      id: "2", 
      title: "Redesign mobile app interface",
      description: "Create a more intuitive and modern mobile interface based on user feedback and usability testing.",
      assignee: "Bob Smith",
      priority: "Medium",
      status: "Not Started",
      dueDate: "2024-03-01",
      progress: 0,
      createdAt: "2024-01-12T14:30:00.000Z"
    },
    {
      id: "3",
      title: "Set up automated testing pipeline",
      description: "Implement comprehensive automated testing including unit tests, integration tests, and end-to-end testing.",
      assignee: "Carol Davis",
      priority: "High",
      status: "Completed",
      dueDate: "2024-01-30",
      progress: 100,
      createdAt: "2024-01-05T09:15:00.000Z"
    },
    {
      id: "4",
      title: "Optimize database performance",
      description: "Analyze and improve database queries, add proper indexing, and implement caching strategies.",
      assignee: "David Wilson",
      priority: "Medium",
      status: "In Progress", 
      dueDate: "2024-02-20",
      progress: 30,
      createdAt: "2024-01-08T16:45:00.000Z"
    },
    {
      id: "5",
      title: "Create comprehensive documentation",
      description: "Write detailed API documentation, user guides, and developer onboarding materials.",
      assignee: "Emma Brown",
      priority: "Low",
      status: "In Progress",
      dueDate: "2024-03-15",
      progress: 40,
      createdAt: "2024-01-15T11:20:00.000Z"
    },
    
    // Marketing & Growth
    {
      id: "6",
      title: "Launch social media campaign",
      description: "Develop and execute a comprehensive social media strategy across LinkedIn, Twitter, and Instagram to increase brand awareness.",
      assignee: "Alice Johnson",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-28",
      progress: 75,
      createdAt: "2024-01-18T13:10:00.000Z"
    },
    {
      id: "7",
      title: "Conduct customer satisfaction survey",
      description: "Design and distribute a comprehensive survey to gather feedback on product features and customer experience.",
      assignee: "Bob Smith",
      priority: "Medium",
      status: "Completed",
      dueDate: "2024-01-25",
      progress: 100,
      createdAt: "2024-01-03T08:30:00.000Z"
    },
    {
      id: "8",
      title: "Develop content marketing strategy",
      description: "Create a 6-month content calendar with blog posts, whitepapers, and video content to drive organic traffic.",
      assignee: "Carol Davis",
      priority: "Medium",
      status: "Not Started",
      dueDate: "2024-03-10",
      progress: 0,
      createdAt: "2024-01-20T15:45:00.000Z"
    },
    
    // Operations & Infrastructure
    {
      id: "9",
      title: "Migrate to cloud infrastructure",
      description: "Move current on-premise servers to AWS cloud infrastructure for better scalability and reliability.",
      assignee: "David Wilson",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-03-30",
      progress: 45,
      createdAt: "2024-01-22T12:00:00.000Z"
    },
    {
      id: "10",
      title: "Implement disaster recovery plan",
      description: "Establish comprehensive backup and disaster recovery procedures to ensure business continuity.",
      assignee: "Emma Brown",
      priority: "High",
      status: "Not Started",
      dueDate: "2024-04-15",
      progress: 0,
      createdAt: "2024-01-25T10:15:00.000Z"
    },
    {
      id: "11",
      title: "Upgrade network security protocols",
      description: "Implement advanced firewall rules, VPN access, and intrusion detection systems.",
      assignee: "Alice Johnson",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-10",
      progress: 80,
      createdAt: "2024-01-05T14:20:00.000Z"
    },
    
    // Product Development
    {
      id: "12",
      title: "Research competitor analysis",
      description: "Conduct thorough analysis of top 5 competitors including feature comparison and pricing strategies.",
      assignee: "Bob Smith",
      priority: "Medium",
      status: "Completed",
      dueDate: "2024-01-20",
      progress: 100,
      createdAt: "2024-01-01T09:00:00.000Z"
    },
    {
      id: "13",
      title: "Design new dashboard interface",
      description: "Create wireframes and prototypes for a redesigned user dashboard with improved analytics and navigation.",
      assignee: "Carol Davis",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-05",
      progress: 65,
      createdAt: "2024-01-15T11:30:00.000Z"
    },
    {
      id: "14",
      title: "Implement real-time notifications",
      description: "Add push notifications and real-time updates using WebSocket connections for better user engagement.",
      assignee: "David Wilson",
      priority: "Low",
      status: "Not Started",
      dueDate: "2024-04-01",
      progress: 0,
      createdAt: "2024-01-28T16:45:00.000Z"
    },
    
    // Sales & Business Development
    {
      id: "15",
      title: "Develop partnership program",
      description: "Create a structured partner program with onboarding materials, commission structure, and support resources.",
      assignee: "Emma Brown",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-20",
      progress: 35,
      createdAt: "2024-01-12T13:15:00.000Z"
    },
    {
      id: "16",
      title: "Launch referral incentive program",
      description: "Design and implement a customer referral program with rewards and tracking system.",
      assignee: "Alice Johnson",
      priority: "Low",
      status: "Not Started",
      dueDate: "2024-04-10",
      progress: 0,
      createdAt: "2024-01-30T10:00:00.000Z"
    },
    {
      id: "17",
      title: "Optimize sales funnel conversion",
      description: "Analyze current sales funnel and implement improvements to increase conversion rates by 15%.",
      assignee: "Bob Smith",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-25",
      progress: 50,
      createdAt: "2024-01-08T15:30:00.000Z"
    },
    
    // Human Resources & Team Development
    {
      id: "18",
      title: "Implement employee wellness program",
      description: "Launch comprehensive wellness program including mental health resources, fitness benefits, and work-life balance initiatives.",
      assignee: "Carol Davis",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-15",
      progress: 25,
      createdAt: "2024-01-20T09:45:00.000Z"
    },
    {
      id: "19",
      title: "Establish remote work policies",
      description: "Create detailed remote work guidelines, communication protocols, and productivity measurement systems.",
      assignee: "David Wilson",
      priority: "Medium",
      status: "Completed",
      dueDate: "2024-01-15",
      progress: 100,
      createdAt: "2024-01-02T11:20:00.000Z"
    },
    {
      id: "20",
      title: "Develop skills training program",
      description: "Design and launch professional development program with courses, certifications, and mentorship opportunities.",
      assignee: "Emma Brown",
      priority: "Low",
      status: "Not Started",
      dueDate: "2024-04-30",
      progress: 0,
      createdAt: "2024-01-25T14:10:00.000Z"
    },
    
    // Finance & Analytics
    {
      id: "21",
      title: "Implement financial forecasting model",
      description: "Build predictive financial models for revenue forecasting and budget planning using historical data.",
      assignee: "Alice Johnson",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-02-15",
      progress: 70,
      createdAt: "2024-01-10T12:30:00.000Z"
    },
    {
      id: "22",
      title: "Set up advanced analytics dashboard",
      description: "Create comprehensive business intelligence dashboard with KPIs, trends, and automated reporting.",
      assignee: "Bob Smith",
      priority: "Medium",
      status: "In Progress",
      dueDate: "2024-03-08",
      progress: 40,
      createdAt: "2024-01-18T16:00:00.000Z"
    },
    
    // Quality Assurance & Compliance
    {
      id: "23",
      title: "Achieve ISO 27001 certification",
      description: "Implement information security management system and complete ISO 27001 certification process.",
      assignee: "Carol Davis",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-06-30",
      progress: 30,
      createdAt: "2024-01-05T10:45:00.000Z"
    },
    {
      id: "24",
      title: "Conduct security penetration testing",
      description: "Hire external security firm to perform comprehensive penetration testing and vulnerability assessment.",
      assignee: "David Wilson",
      priority: "High",
      status: "Completed",
      dueDate: "2024-01-31",
      progress: 100,
      createdAt: "2024-01-15T13:20:00.000Z"
    },
    
    // Innovation & Research
    {
      id: "25",
      title: "Explore AI integration opportunities",
      description: "Research and prototype AI/ML features that could enhance product capabilities and user experience.",
      assignee: "Emma Brown",
      priority: "Low",
      status: "Not Started",
      dueDate: "2024-05-15",
      progress: 0,
      createdAt: "2024-01-28T11:15:00.000Z"
    }
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingObjective, setEditingObjective] = useState<Objective | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "Medium" as const,
    status: "Not Started" as const,
    dueDate: "",
    progress: 0
  })

  // Load objectives from localStorage on component mount
  useEffect(() => {
    const savedObjectives = localStorage.getItem("teamObjectives")
    if (savedObjectives) {
      try {
        const parsed = JSON.parse(savedObjectives)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setObjectives(parsed)
        }
      } catch (error) {
        console.error('Error parsing saved objectives:', error)
      }
    }
  }, [])

  // Save objectives to localStorage whenever objectives change
  useEffect(() => {
    localStorage.setItem("teamObjectives", JSON.stringify(objectives))
  }, [objectives])

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      assignee: "",
      priority: "Medium",
      status: "Not Started",
      dueDate: "",
      progress: 0
    })
    setEditingObjective(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (editingObjective) {
      // Update existing objective
      setObjectives(prev => prev.map(obj => 
        obj.id === editingObjective.id 
          ? { ...obj, ...formData }
          : obj
      ))
    } else {
      // Create new objective
      const newObjective: Objective = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString()
      }
      setObjectives(prev => [...prev, newObjective])
    }
    
    resetForm()
    setIsDialogOpen(false)
  }

  const handleEdit = (objective: Objective) => {
    setEditingObjective(objective)
    setFormData({
      title: objective.title,
      description: objective.description,
      assignee: objective.assignee,
      priority: objective.priority,
      status: objective.status,
      dueDate: objective.dueDate,
      progress: objective.progress
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: string) => {
    setObjectives(prev => prev.filter(obj => obj.id !== id))
  }

  const updateProgress = (id: string, progress: number) => {
    setObjectives(prev => prev.map(obj => 
      obj.id === id 
        ? { 
            ...obj, 
            progress,
            status: progress === 100 ? "Completed" : progress > 0 ? "In Progress" : "Not Started"
          }
        : obj
    ))
  }

  const getStats = () => {
    const total = objectives.length
    const completed = objectives.filter(obj => obj.status === "Completed").length
    const inProgress = objectives.filter(obj => obj.status === "In Progress").length
    const notStarted = objectives.filter(obj => obj.status === "Not Started").length
    
    return { total, completed, inProgress, notStarted }
  }

  const stats = getStats()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Target className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Team Objectives</h1>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={resetForm}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Objective
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>
                    {editingObjective ? "Edit Objective" : "Add New Objective"}
                  </DialogTitle>
                  <DialogDescription>
                    {editingObjective ? "Update the objective details below." : "Create a new team objective to track progress."}
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter objective title"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe the objective in detail"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="assignee">Assignee</Label>
                      <Select value={formData.assignee} onValueChange={(value) => setFormData(prev => ({ ...prev, assignee: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select assignee" />
                        </SelectTrigger>
                        <SelectContent>
                          {teamMembers.map(member => (
                            <SelectItem key={member} value={member}>{member}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="priority">Priority</Label>
                      <Select value={formData.priority} onValueChange={(value: "Low" | "Medium" | "High") => setFormData(prev => ({ ...prev, priority: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="status">Status</Label>
                      <Select value={formData.status} onValueChange={(value: "Not Started" | "In Progress" | "Completed") => setFormData(prev => ({ ...prev, status: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Not Started">Not Started</SelectItem>
                          <SelectItem value="In Progress">In Progress</SelectItem>
                          <SelectItem value="Completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="dueDate">Due Date</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={formData.dueDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="progress">Progress ({formData.progress}%)</Label>
                    <Input
                      id="progress"
                      type="range"
                      min="0"
                      max="100"
                      step="10"
                      value={formData.progress}
                      onChange={(e) => setFormData(prev => ({ ...prev, progress: parseInt(e.target.value) }))}
                      className="mt-2"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingObjective ? "Update" : "Create"} Objective
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Not Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-600">{stats.notStarted}</div>
            </CardContent>
          </Card>
        </div>

        {/* Objectives Grid */}
        {objectives.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No objectives yet</h3>
              <p className="text-gray-600 mb-4">Get started by creating your first team objective.</p>
              <Button onClick={() => setIsDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Objective
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective) => {
              const StatusIcon = statusIcons[objective.status]
              return (
                <Card key={objective.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{objective.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={priorityColors[objective.priority]}>
                            {objective.priority}
                          </Badge>
                          <Badge className={statusColors[objective.status]}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {objective.status}
                          </Badge>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEdit(objective)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDelete(objective.id)}
                            className="text-red-600"
                          >
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {objective.description && (
                      <p className="text-sm text-gray-600">{objective.description}</p>
                    )}
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{objective.progress}%</span>
                      </div>
                      <Progress value={objective.progress} className="h-2" />
                      <Input
                        type="range"
                        min="0"
                        max="100"
                        step="10"
                        value={objective.progress}
                        onChange={(e) => updateProgress(objective.id, parseInt(e.target.value))}
                        className="h-2 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{objective.assignee || "Unassigned"}</span>
                      </div>
                      {objective.dueDate && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(objective.dueDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
