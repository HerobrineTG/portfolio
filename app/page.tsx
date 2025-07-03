'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar, 
  User, 
  Eye,
  Lock,
  BookOpen,
  Save,
  X,
  Search,
  Filter,
  Clock,
  Tag,
  Heart,
  Share2,
  MessageCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  tags: string[];
  published: boolean;
  readTime: number;
  views: number;
  likes: number;
  category: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  
  // Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['All', 'Web Development', 'Programming', 'Tutorials', 'Personal', 'Tech News', 'Projects'];

  useEffect(() => {
    // Load posts from localStorage
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Add some sample posts for demonstration
      const samplePosts: BlogPost[] = [
        {
          id: '1',
          title: 'Getting Started with Next.js 13: A Comprehensive Guide',
          content: `Next.js 13 has revolutionized the way we build React applications with its new App Router, Server Components, and improved performance optimizations. In this comprehensive guide, I'll walk you through everything you need to know to get started with Next.js 13.

## What's New in Next.js 13?

The latest version of Next.js introduces several groundbreaking features:

### 1. App Router
The new App Router is built on React's Server Components and provides a more intuitive way to organize your application. It uses a file-system based router where folders define routes.

### 2. Server Components
Server Components allow you to render components on the server, reducing the amount of JavaScript sent to the client and improving performance.

### 3. Streaming
With the new streaming capabilities, you can progressively render your UI, showing users content as it becomes available.

## Setting Up Your First Next.js 13 Project

Let's start by creating a new Next.js 13 project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
cd my-app
npm run dev
\`\`\`

This command creates a new Next.js project with TypeScript, Tailwind CSS, and ESLint configured.

## Understanding the App Directory

The new app directory structure looks like this:

\`\`\`
app/
  layout.tsx
  page.tsx
  loading.tsx
  error.tsx
  not-found.tsx
\`\`\`

Each file serves a specific purpose:
- \`layout.tsx\`: Defines the layout for a route segment
- \`page.tsx\`: Defines the UI for a route
- \`loading.tsx\`: Shows loading UI
- \`error.tsx\`: Shows error UI
- \`not-found.tsx\`: Shows 404 UI

## Best Practices

1. **Use Server Components by default**: Only use Client Components when you need interactivity
2. **Optimize images**: Use Next.js Image component for automatic optimization
3. **Implement proper SEO**: Use metadata API for better search engine optimization
4. **Monitor performance**: Use Next.js built-in analytics and monitoring tools

## Conclusion

Next.js 13 represents a significant step forward in React development. The new features make it easier to build fast, scalable applications while maintaining a great developer experience.

Start experimenting with these new features in your next project, and you'll quickly see the benefits they bring to both development and user experience.`,
          excerpt: 'Discover the revolutionary features of Next.js 13 including the new App Router, Server Components, and streaming capabilities that will transform your React development experience.',
          date: '2024-01-15',
          tags: ['Next.js', 'React', 'Web Development', 'JavaScript', 'Tutorial'],
          published: true,
          readTime: 8,
          views: 1250,
          likes: 89,
          category: 'Web Development'
        },
        {
          id: '2',
          title: 'Building Custom Minecraft Plugins: From Concept to Implementation',
          content: `Creating custom Minecraft plugins is one of the most rewarding ways to enhance gameplay and learn Java programming. In this detailed guide, I'll share my experience building plugins and the lessons I've learned along the way.

## Why Build Minecraft Plugins?

Minecraft plugins offer unlimited possibilities to customize gameplay, add new features, and create unique server experiences. They're also an excellent way to learn Java programming in a fun, interactive environment.

## Setting Up Your Development Environment

Before we start coding, let's set up the development environment:

### 1. Install Java Development Kit (JDK)
Make sure you have JDK 8 or higher installed on your system.

### 2. Choose an IDE
I recommend IntelliJ IDEA or Eclipse for Java development.

### 3. Set Up Spigot/Paper
Download the latest Spigot or Paper server jar for testing your plugins.

## Creating Your First Plugin

Let's create a simple plugin that adds a custom command:

\`\`\`java
public class MyFirstPlugin extends JavaPlugin {
    
    @Override
    public void onEnable() {
        getLogger().info("MyFirstPlugin has been enabled!");
        this.getCommand("hello").setExecutor(new HelloCommand());
    }
    
    @Override
    public void onDisable() {
        getLogger().info("MyFirstPlugin has been disabled!");
    }
}
\`\`\`

## Essential Plugin Components

### 1. plugin.yml
This file contains metadata about your plugin:

\`\`\`yaml
name: MyFirstPlugin
version: 1.0.0
main: com.example.MyFirstPlugin
api-version: 1.19
commands:
  hello:
    description: Says hello to the player
    usage: /hello
\`\`\`

### 2. Event Listeners
Handle game events to create interactive features:

\`\`\`java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent event) {
    Player player = event.getPlayer();
    player.sendMessage("Welcome to the server!");
}
\`\`\`

### 3. Configuration Files
Use configuration files to make your plugin customizable:

\`\`\`java
FileConfiguration config = this.getConfig();
config.addDefault("welcome-message", "Welcome!");
config.options().copyDefaults(true);
saveConfig();
\`\`\`

## Advanced Features

### Custom Items and Recipes
Create unique items with special properties and custom crafting recipes.

### Database Integration
Store player data and plugin information using SQLite or MySQL.

### Economy Integration
Connect with economy plugins to create shops and trading systems.

## Best Practices

1. **Always validate input**: Check player permissions and command arguments
2. **Handle errors gracefully**: Use try-catch blocks and provide meaningful error messages
3. **Optimize performance**: Avoid blocking the main thread with heavy operations
4. **Test thoroughly**: Test your plugin on different server versions and configurations

## Publishing Your Plugin

Once your plugin is ready:
1. Create comprehensive documentation
2. Test on multiple server versions
3. Submit to SpigotMC or other plugin repositories
4. Provide ongoing support and updates

## Conclusion

Building Minecraft plugins is an incredible journey that combines creativity with programming skills. Start with simple ideas and gradually work your way up to more complex features.

Remember, the Minecraft plugin development community is very supportive, so don't hesitate to ask for help when you need it!`,
          excerpt: 'Learn how to create amazing Minecraft plugins from scratch, covering everything from basic setup to advanced features like custom items and database integration.',
          date: '2024-01-10',
          tags: ['Minecraft', 'Java', 'Plugin Development', 'Game Development', 'Programming'],
          published: true,
          readTime: 12,
          views: 890,
          likes: 67,
          category: 'Programming'
        },
        {
          id: '3',
          title: 'My Journey as a 15-Year-Old Developer: Challenges and Triumphs',
          content: `Being a teenage developer comes with unique challenges and incredible opportunities. Today, I want to share my personal journey, the obstacles I've faced, and the victories that have shaped my path in technology.

## How It All Started

My coding journey began when I was 13 years old. Like many young developers, I was initially drawn to programming through gaming. I wanted to create my own Minecraft mods and understand how my favorite games worked.

## The Early Challenges

### 1. Finding the Right Resources
As a young learner, finding age-appropriate and comprehensive learning resources was challenging. Many tutorials assumed prior knowledge that I didn't have.

### 2. Balancing School and Coding
Managing schoolwork while pursuing my passion for programming required careful time management and prioritization.

### 3. Overcoming Imposter Syndrome
Feeling like I didn't belong in developer communities because of my age was a significant hurdle to overcome.

## Key Learning Milestones

### First "Hello World"
I still remember the excitement of seeing my first "Hello World" program run successfully. It was a simple Java program, but it felt like magic.

### First Minecraft Plugin
Creating my first working Minecraft plugin was a game-changer. Seeing other players use something I created was incredibly motivating.

### First Web Application
Transitioning from Java to web development opened up a whole new world of possibilities. Building my first React application felt like unlocking a new superpower.

## What I've Learned

### 1. Persistence is Key
Programming is challenging, and bugs are inevitable. Learning to persist through difficult problems has been crucial to my growth.

### 2. Community Matters
The developer community is incredibly welcoming and supportive. Don't be afraid to ask questions and seek help.

### 3. Build Projects You're Passionate About
Working on projects that genuinely interest you makes learning more enjoyable and sustainable.

### 4. Document Your Journey
Keeping track of your progress and sharing your experiences helps both you and others in the community.

## Advice for Young Developers

### Start Small
Don't try to build the next Facebook on your first project. Start with simple programs and gradually increase complexity.

### Embrace Failure
Every bug is a learning opportunity. Don't get discouraged by errors – they're part of the learning process.

### Find Mentors
Connect with experienced developers who can guide you and provide valuable insights.

### Stay Curious
Technology evolves rapidly. Maintain your curiosity and keep learning new things.

## Current Projects and Future Goals

Currently, I'm working on several exciting projects:
- A comprehensive portfolio website (this one!)
- Advanced Minecraft plugins with custom mechanics
- Web applications using modern frameworks

My future goals include:
- Contributing to open-source projects
- Pursuing computer science in college
- Building applications that solve real-world problems

## The Road Ahead

Being a young developer in today's tech landscape is both exciting and challenging. The opportunities are endless, and the tools available to us are more powerful than ever.

To other young developers reading this: your age is not a limitation – it's an advantage. You have time to experiment, learn, and grow. Embrace the journey, celebrate small victories, and never stop coding.

## Final Thoughts

My journey as a 15-year-old developer has been filled with ups and downs, but every challenge has contributed to my growth. The skills I'm developing now will serve as the foundation for my future career in technology.

Remember, every expert was once a beginner. Keep coding, keep learning, and most importantly, keep having fun with it!`,
          excerpt: 'A personal reflection on the challenges and triumphs of being a teenage developer, sharing insights and advice for other young programmers starting their journey.',
          date: '2024-01-05',
          tags: ['Personal', 'Career', 'Learning', 'Motivation', 'Young Developer'],
          published: true,
          readTime: 10,
          views: 1450,
          likes: 156,
          category: 'Personal'
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('blog-posts', JSON.stringify(samplePosts));
    }
    
    // Check if user is authenticated
    const authStatus = localStorage.getItem('blog-auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAuth = () => {
    if (email === 'jehoshua.dev@gmail.com' && password === 'HerobrineTG') {
      setIsAuthenticated(true);
      localStorage.setItem('blog-auth', 'true');
      setShowAuthModal(false);
      setAuthError('');
      setEmail('');
      setPassword('');
    } else {
      setAuthError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('blog-auth');
  };

  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('blog-posts', JSON.stringify(newPosts));
  };

  const calculateReadTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const handleCreatePost = () => {
    if (!title.trim() || !content.trim()) return;

    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      excerpt: content.trim().substring(0, 200) + '...',
      date: new Date().toISOString().split('T')[0],
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      published: true,
      readTime: calculateReadTime(content.trim()),
      views: 0,
      likes: 0,
      category: category || 'Personal'
    };

    const newPosts = [newPost, ...posts];
    savePosts(newPosts);
    
    // Reset form
    setTitle('');
    setContent('');
    setTags('');
    setCategory('');
    setShowCreateModal(false);
  };

  const handleEditPost = () => {
    if (!editingPost || !title.trim() || !content.trim()) return;

    const updatedPosts = posts.map(post => 
      post.id === editingPost.id 
        ? {
            ...post,
            title: title.trim(),
            content: content.trim(),
            excerpt: content.trim().substring(0, 200) + '...',
            tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
            readTime: calculateReadTime(content.trim()),
            category: category || post.category
          }
        : post
    );

    savePosts(updatedPosts);
    
    // Reset form
    setTitle('');
    setContent('');
    setTags('');
    setCategory('');
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    savePosts(updatedPosts);
  };

  const openEditModal = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setTags(post.tags.join(', '));
    setCategory(post.category);
  };

  const closeModals = () => {
    setShowCreateModal(false);
    setEditingPost(null);
    setTitle('');
    setContent('');
    setTags('');
    setCategory('');
  };

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-mesh-gradient-dark animate-gradient opacity-60"></div>
      <div className="fixed inset-0 bg-mesh-gradient animate-gradient opacity-40"></div>
      <div className="fixed inset-0 grid-pattern opacity-20"></div>
      <div className="fixed inset-0 noise-texture opacity-50"></div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-r from-black/20 via-purple-900/20 to-black/20 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Portfolio</span>
              </Link>
              <div className="flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-400 glow" />
                <h1 className="text-3xl font-bold text-gradient">My Blog</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  <Button 
                    onClick={() => setShowCreateModal(true)}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleLogout}
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => setShowAuthModal(true)}
                  className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">Developer Insights</h2>
          <p className="text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            Welcome to my blog where I share my <span className="text-purple-400 font-semibold">coding journey</span>, 
            <span className="text-violet-400 font-semibold"> technical insights</span>, and 
            <span className="text-purple-300 font-semibold"> lessons learned</span> as a young developer.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-black to-violet-500 mx-auto mt-8 animate-gradient"></div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{posts.length}</div>
              <div className="text-purple-200 text-sm">Total Posts</div>
              <BookOpen className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{posts.reduce((sum, post) => sum + post.views, 0)}</div>
              <div className="text-purple-200 text-sm">Total Views</div>
              <Eye className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{posts.reduce((sum, post) => sum + post.likes, 0)}</div>
              <div className="text-purple-200 text-sm">Total Likes</div>
              <Heart className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{allTags.length}</div>
              <div className="text-purple-200 text-sm">Topics Covered</div>
              <Tag className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts, tags, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                    : 'border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                } transition-all duration-300`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Tag Filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === 'All' ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag('All')}
                className={`${
                  selectedTag === 'All'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                    : 'border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                } transition-all duration-300`}
              >
                All Tags
              </Button>
              {allTags.slice(0, 10).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={`${
                    selectedTag === tag
                      ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                      : 'border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
                  } transition-all duration-300`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Blog Posts */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-24 h-24 text-purple-400/50 mx-auto mb-8 animate-float" />
            <h2 className="text-4xl font-bold text-gradient mb-6">
              {posts.length === 0 ? 'No Posts Yet' : 'No Posts Found'}
            </h2>
            <p className="text-xl text-purple-200/80 mb-8">
              {posts.length === 0 
                ? (isAuthenticated 
                    ? "Ready to share your first story? Click 'New Post' to get started!" 
                    : "Check back soon for amazing content about coding, development, and tech insights!"
                  )
                : "Try adjusting your search terms or filters to find what you're looking for."
              }
            </p>
            {isAuthenticated && posts.length === 0 && (
              <Button 
                onClick={() => setShowCreateModal(true)}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-8 py-4"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Your First Post
              </Button>
            )}
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-gradient mb-3 hover:glow transition-all">
                        {post.title}
                      </CardTitle>
                      <div className="flex items-center gap-6 text-sm text-purple-300 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Jehoshua
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} min read
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes} likes
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-gradient-to-r from-black/50 to-purple-800/50 text-purple-200 border border-purple-500/30">
                          {post.category}
                        </Badge>
                        {post.tags.map((tag) => (
                          <Badge key={tag} className="bg-gradient-to-r from-black/50 to-purple-800/50 text-purple-200 border border-purple-500/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {isAuthenticated && (
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openEditModal(post)}
                          className="hover:bg-purple-500/20"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                          className="hover:bg-red-500/20 text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed text-purple-100/80 mb-6">
                    {post.excerpt}
                  </CardDescription>
                  <div className="prose prose-invert max-w-none">
                    <div className="text-purple-100/90 leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-purple-500/20">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm" className="hover:bg-purple-500/20 text-purple-300">
                        <Heart className="w-4 h-4 mr-2" />
                        Like ({post.likes})
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-purple-500/20 text-purple-300">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:bg-purple-500/20 text-purple-300">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Comment
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-gradient-to-br from-black/80 via-purple-900/60 to-violet-800/40 backdrop-blur-xl border border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient text-center">Admin Login</CardTitle>
              <CardDescription className="text-center text-purple-200">
                Enter your credentials to manage blog posts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your password"
                />
              </div>
              {authError && (
                <p className="text-red-400 text-sm">{authError}</p>
              )}
              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={handleAuth}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white"
                >
                  Login
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setShowAuthModal(false);
                    setAuthError('');
                    setEmail('');
                    setPassword('');
                  }}
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Create/Edit Post Modal */}
      {(showCreateModal || editingPost) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black/80 via-purple-900/60 to-violet-800/40 backdrop-blur-xl border border-purple-500/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-gradient">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={closeModals}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter post title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select a category</option>
                  {categories.slice(1).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={15}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  placeholder="Write your blog post content here... (Supports Markdown)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-purple-200 mb-2">Tags</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 bg-black/50 border border-purple-500/30 rounded-md text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter tags separated by commas (e.g., coding, javascript, tutorial)"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button 
                  onClick={editingPost ? handleEditPost : handleCreatePost}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white"
                  disabled={!title.trim() || !content.trim()}
                >
                  <Save className="w-4 h-4 mr-2" />
                  {editingPost ? 'Update Post' : 'Create Post'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={closeModals}
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
