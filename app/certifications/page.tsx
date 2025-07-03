'use client';

import { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Award, 
  Calendar, 
  ExternalLink, 
  Star,
  CheckCircle,
  Trophy,
  Medal,
  Zap,
  BookOpen,
  Code2,
  Globe,
  Gamepad2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  credentialId?: string;
  verificationUrl?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Web Development' | 'Programming' | 'Game Development' | 'Database' | 'Cloud' | 'Other';
  featured: boolean;
}

export default function CertificationsPage() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Sample certifications data
    const sampleCertifications: Certification[] = [
      {
        id: '1',
        title: 'JavaScript Fundamentals',
        issuer: 'FreeCodeCamp',
        date: '2024-01-15',
        description: 'Comprehensive certification covering JavaScript ES6+, DOM manipulation, async programming, and modern development practices.',
        skills: ['JavaScript', 'ES6+', 'DOM', 'Async/Await', 'Promises'],
        credentialId: 'JS-2024-001',
        verificationUrl: '#',
        level: 'Intermediate',
        category: 'Programming',
        featured: true
      },
      {
        id: '2',
        title: 'Responsive Web Design',
        issuer: 'FreeCodeCamp',
        date: '2023-12-10',
        description: 'Mastery of HTML5, CSS3, Flexbox, Grid, and responsive design principles for modern web development.',
        skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
        credentialId: 'RWD-2023-045',
        verificationUrl: '#',
        level: 'Intermediate',
        category: 'Web Development',
        featured: true
      },
      {
        id: '3',
        title: 'Java Programming Basics',
        issuer: 'Oracle Academy',
        date: '2023-11-20',
        description: 'Foundation in Java programming including OOP concepts, data structures, and basic algorithms.',
        skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
        credentialId: 'JAVA-2023-078',
        level: 'Beginner',
        category: 'Programming',
        featured: false
      },
      {
        id: '4',
        title: 'Minecraft Plugin Development',
        issuer: 'SpigotMC Community',
        date: '2023-10-05',
        description: 'Advanced certification in Bukkit/Spigot plugin development, server management, and custom gameplay mechanics.',
        skills: ['Java', 'Bukkit API', 'Spigot', 'Server Management', 'Plugin Architecture'],
        credentialId: 'MPD-2023-012',
        level: 'Advanced',
        category: 'Game Development',
        featured: true
      },
      {
        id: '5',
        title: 'Git Version Control',
        issuer: 'GitHub',
        date: '2023-09-15',
        description: 'Proficiency in Git workflows, branching strategies, collaboration, and project management.',
        skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
        credentialId: 'GIT-2023-156',
        level: 'Intermediate',
        category: 'Other',
        featured: false
      },
      {
        id: '6',
        title: 'Next.js Development',
        issuer: 'Vercel',
        date: '2024-02-01',
        description: 'Modern React framework mastery including SSR, SSG, API routes, and deployment optimization.',
        skills: ['Next.js', 'React', 'SSR', 'SSG', 'API Routes'],
        credentialId: 'NEXT-2024-089',
        level: 'Advanced',
        category: 'Web Development',
        featured: true
      }
    ];

    setCertifications(sampleCertifications);
  }, []);

  const categories = ['All', 'Web Development', 'Programming', 'Game Development', 'Database', 'Cloud', 'Other'];
  
  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const featuredCertifications = certifications.filter(cert => cert.featured);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'from-green-600 to-emerald-600';
      case 'Intermediate': return 'from-blue-600 to-cyan-600';
      case 'Advanced': return 'from-purple-600 to-violet-600';
      case 'Expert': return 'from-red-600 to-pink-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development': return Globe;
      case 'Programming': return Code2;
      case 'Game Development': return Gamepad2;
      case 'Database': return BookOpen;
      case 'Cloud': return Zap;
      default: return Award;
    }
  };

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
                <Trophy className="w-8 h-8 text-purple-400 glow" />
                <h1 className="text-3xl font-bold text-gradient">My Certifications</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex justify-center items-center gap-4 mb-6">
            <Medal className="w-16 h-16 text-purple-400 animate-float glow" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient glow">Professional Certifications</h2>
          <p className="text-xl text-purple-200/80 max-w-3xl mx-auto leading-relaxed">
            Showcasing my commitment to <span className="text-purple-400 font-semibold">continuous learning</span> and 
            <span className="text-violet-400 font-semibold"> professional development</span> through verified certifications 
            and achievements in various technology domains.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-black to-violet-500 mx-auto mt-8 animate-gradient"></div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{certifications.length}</div>
              <div className="text-purple-200 text-sm">Total Certifications</div>
              <Award className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{featuredCertifications.length}</div>
              <div className="text-purple-200 text-sm">Featured Achievements</div>
              <Star className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{categories.length - 1}</div>
              <div className="text-purple-200 text-sm">Skill Categories</div>
              <Trophy className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">2024</div>
              <div className="text-purple-200 text-sm">Latest Achievement</div>
              <CheckCircle className="w-6 h-6 text-purple-400 mx-auto mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'border-purple-500/50 text-purple-300 hover:bg-purple-500/10'
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Certifications */}
        {selectedCategory === 'All' && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gradient mb-8 text-center">Featured Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCertifications.map((cert) => {
                const IconComponent = getCategoryIcon(cert.category);
                return (
                  <Card key={cert.id} className="group hover-lift bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${getLevelColor(cert.level)} group-hover:scale-110 transition-all duration-300 glow`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <Badge className="bg-gradient-to-r from-black to-purple-600 text-white px-3 py-1 text-xs font-bold animate-pulse border border-purple-500/30">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                          <CardTitle className="text-xl text-gradient group-hover:glow transition-all mb-2">
                            {cert.title}
                          </CardTitle>
                          <div className="text-sm text-purple-300 mb-2">{cert.issuer}</div>
                          <div className="flex items-center gap-2 text-xs text-purple-400">
                            <Calendar className="w-3 h-3" />
                            {new Date(cert.date).toLocaleDateString()}
                          </div>
                        </div>
                        {cert.verificationUrl && (
                          <Button variant="ghost" size="sm" className="shrink-0 hover:bg-gradient-to-r hover:from-black/20 hover:to-purple-500/20">
                            <ExternalLink className="h-4 w-4 text-purple-400" />
                          </Button>
                        )}
                      </div>
                      <Badge className={`bg-gradient-to-r ${getLevelColor(cert.level)} text-white px-3 py-1 text-xs font-semibold w-fit`}>
                        {cert.level}
                      </Badge>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* All Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-gradient mb-8 text-center">
            {selectedCategory === 'All' ? 'All Certifications' : `${selectedCategory} Certifications`}
          </h3>
          <div className="grid gap-8">
            {filteredCertifications.map((cert) => {
              const IconComponent = getCategoryIcon(cert.category);
              return (
                <Card key={cert.id} className="group hover-lift bg-gradient-to-br from-black/60 via-purple-900/40 to-violet-800/30 backdrop-blur-xl border border-purple-500/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${getLevelColor(cert.level)} group-hover:scale-110 transition-all duration-300 glow`}>
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-2xl text-gradient group-hover:glow transition-all">
                                {cert.title}
                              </CardTitle>
                              {cert.featured && (
                                <Badge className="bg-gradient-to-r from-black to-purple-600 text-white px-3 py-1 text-xs font-bold animate-pulse border border-purple-500/30">
                                  <Star className="w-3 h-3 mr-1" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-purple-300 mb-3">
                              <span className="font-semibold">{cert.issuer}</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(cert.date).toLocaleDateString()}
                              </div>
                              {cert.credentialId && (
                                <span className="text-purple-400">ID: {cert.credentialId}</span>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge className={`bg-gradient-to-r ${getLevelColor(cert.level)} text-white px-3 py-1 text-sm font-semibold`}>
                                {cert.level}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-black/50 to-purple-800/50 text-purple-200 border border-purple-500/30 px-3 py-1 text-sm">
                                {cert.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                      {cert.verificationUrl && (
                        <Button variant="ghost" size="sm" className="shrink-0 hover:bg-gradient-to-r hover:from-black/20 hover:to-purple-500/20 hover:scale-110 transition-all">
                          <ExternalLink className="h-5 w-5 text-purple-400" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed text-purple-100/80 mb-6">
                      {cert.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} className="bg-gradient-to-r from-black/50 to-purple-800/50 text-purple-200 border border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-700/50 hover:to-black/50 transition-colors text-xs px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-20">
            <Award className="w-24 h-24 text-purple-400/50 mx-auto mb-8 animate-float" />
            <h3 className="text-3xl font-bold text-gradient mb-4">No Certifications Found</h3>
            <p className="text-xl text-purple-200/80">
              No certifications found in the "{selectedCategory}" category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}