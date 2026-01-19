import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Users,
  Trophy,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronRight,
  Star,
  Award,
  Target,
  Shield,
  CheckCircle,
  MessageCircle
} from 'lucide-react';
import {
  ssbInfo,
  coaches,
  achievements,
  testimonials,
  contactInfo,
  facilities
} from '../data/mock';

const LandingPage = () => {
  const logoUrl = "https://customer-assets.emergentagent.com/job_c1ece7c8-29ba-42b8-a301-accd4c69b68c/artifacts/dpu6ox8m_c867f0ca.Foto%20Siswa.004937.png";

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="SSB Balida Maju" className="h-12 md:h-14 w-auto" />
              <span className="font-bold text-lg md:text-xl text-balida-blue hidden sm:block">SSB Balida Maju</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('pelatih')} className="text-gray-600 hover:text-balida-blue transition-colors font-medium">Pelatih</button>
              <button onClick={() => scrollToSection('prestasi')} className="text-gray-600 hover:text-balida-blue transition-colors font-medium">Prestasi</button>
              <button onClick={() => scrollToSection('kontak')} className="text-gray-600 hover:text-balida-blue transition-colors font-medium">Kontak</button>
            </nav>
            <Button 
              onClick={() => window.open(ssbInfo.googleFormLink, '_blank')}
              className="bg-balida-gold hover:bg-balida-gold/90 text-white font-semibold px-6"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 min-h-[90vh] flex items-center bg-gradient-to-br from-balida-blue via-balida-blue to-balida-blue/90 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-balida-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-balida-green/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-balida-gold/20 text-balida-gold border-balida-gold/30 mb-6 px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                Academy Sepak Bola Profesional
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {ssbInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-balida-gold font-medium mb-4">
                {ssbInfo.tagline}
              </p>
              <p className="text-white/80 text-lg mb-8 max-w-xl">
                {ssbInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => window.open(ssbInfo.googleFormLink, '_blank')}
                  size="lg"
                  className="bg-balida-gold hover:bg-balida-gold/90 text-white font-bold px-8 py-6 text-lg group"
                >
                  Daftar Sekarang
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('pelatih')}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-balida-blue font-bold px-8 py-6 text-lg"
                >
                  Lihat Pelatih
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-balida-gold">{ssbInfo.totalStudents}</p>
                  <p className="text-white/70 text-sm">Siswa Aktif</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-balida-gold">{ssbInfo.achievements}</p>
                  <p className="text-white/70 text-sm">Prestasi</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-balida-gold">Sejak {ssbInfo.founded}</p>
                  <p className="text-white/70 text-sm">Berdiri</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-balida-gold/20 rounded-full blur-3xl scale-110"></div>
                <img 
                  src={logoUrl} 
                  alt="SSB Balida Maju Logo" 
                  className="relative w-80 h-80 object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-balida-blue/10 text-balida-blue border-balida-blue/20 mb-4">
              Mengapa Memilih Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan SSB Balida Maju
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pembinaan terbaik untuk mengembangkan potensi anak Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Pelatih Bersertifikat", desc: "Semua pelatih memiliki lisensi resmi PSSI/AFC" },
              { icon: Target, title: "Metode Modern", desc: "Kurikulum latihan sesuai standar internasional" },
              { icon: Users, title: "Kelompok Usia", desc: "Pembagian kelas sesuai usia dan kemampuan" },
              { icon: Trophy, title: "Berprestasi", desc: "Aktif mengikuti turnamen tingkat lokal & nasional" }
            ].map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-balida-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-balida-blue group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-balida-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="pelatih" className="py-20 bg-balida-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-balida-gold/20 text-balida-gold border-balida-gold/30 mb-4">
              Tim Pelatih
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pelatih Bersertifikat & Berpengalaman
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Dibimbing oleh pelatih profesional yang memiliki lisensi resmi dan pengalaman bertahun-tahun
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <Card key={coach.id} className="overflow-hidden border-0 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-balida-gold rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-balida-gold mx-auto"
                    />
                  </div>
                  <Badge className="bg-balida-gold text-white mb-3">{coach.license}</Badge>
                  <h3 className="text-xl font-bold text-white mb-1">{coach.name}</h3>
                  <p className="text-balida-gold font-medium mb-4">{coach.role}</p>
                  <p className="text-white/70 text-sm mb-2">{coach.experience}</p>
                  <p className="text-white/60 text-sm">{coach.achievements}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="prestasi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-balida-gold/10 text-balida-gold border-balida-gold/20 mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Prestasi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jejak Prestasi Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai penghargaan yang telah diraih oleh siswa-siswi SSB Balida Maju
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {achievements.map((item, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-balida-gold mx-auto mb-3" />
                  <Badge className="bg-balida-blue/10 text-balida-blue mb-2">{item.year}</Badge>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-balida-green/10 text-balida-green border-balida-green/20 mb-4">
              Testimoni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-balida-gold text-balida-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-balida-blue rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-balida-blue/10 text-balida-blue border-balida-blue/20 mb-4">
                Fasilitas
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fasilitas Latihan Memadai
              </h2>
              <p className="text-gray-600 mb-8">
                Kami menyediakan fasilitas yang mendukung proses latihan anak-anak agar dapat berkembang dengan optimal.
              </p>
              <div className="space-y-4">
                {facilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-balida-blue/5 transition-colors">
                    <CheckCircle className="w-6 h-6 text-balida-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-balida-blue/20 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-balida-gold/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-gradient-to-br from-balida-blue to-balida-blue/80 rounded-3xl p-8 text-center">
                <img src={logoUrl} alt="SSB Balida Maju" className="w-48 h-48 mx-auto mb-6 object-contain" />
                <h3 className="text-2xl font-bold text-white mb-2">Bergabunglah Bersama Kami!</h3>
                <p className="text-white/70 mb-6">Wujudkan impian anak Anda menjadi pesepakbola profesional</p>
                <Button 
                  onClick={() => window.open(ssbInfo.googleFormLink, '_blank')}
                  size="lg"
                  className="bg-balida-gold hover:bg-balida-gold/90 text-white font-bold"
                >
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-balida-blue to-balida-blue/90 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-balida-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-balida-green/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Siap Bergabung dengan SSB Balida Maju?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Daftarkan anak Anda sekarang dan biarkan kami membantu mengembangkan bakat sepak bolanya bersama pelatih profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open(ssbInfo.googleFormLink, '_blank')}
              size="lg"
              className="bg-balida-gold hover:bg-balida-gold/90 text-white font-bold px-10 py-6 text-lg"
            >
              Daftar via Google Form
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-balida-blue font-bold px-10 py-6 text-lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-balida-blue/10 text-balida-blue border-balida-blue/20 mb-4">
              Kontak
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-balida-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-balida-blue" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Lokasi</h4>
                <p className="text-gray-600 text-sm">{contactInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-balida-green/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-balida-green" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600 text-sm">{contactInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-balida-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-balida-gold" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600 text-sm">{contactInfo.email}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => window.open(`https://instagram.com/${contactInfo.instagram.replace('@', '')}`, '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-7 h-7 text-pink-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Instagram</h4>
                <p className="text-gray-600 text-sm">{contactInfo.instagram}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logoUrl} alt="SSB Balida Maju" className="h-14 w-auto" />
                <span className="font-bold text-xl">SSB Balida Maju</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {ssbInfo.description}
              </p>
              <div className="flex gap-4">
                <a href={`https://instagram.com/${contactInfo.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-balida-gold transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-balida-gold transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('pelatih')} className="text-gray-400 hover:text-white transition-colors">Pelatih</button></li>
                <li><button onClick={() => scrollToSection('prestasi')} className="text-gray-400 hover:text-white transition-colors">Prestasi</button></li>
                <li><button onClick={() => scrollToSection('kontak')} className="text-gray-400 hover:text-white transition-colors">Kontak</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Jadwal Latihan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Rabu: 15:00 - 17:00</li>
                <li>Sabtu: 07:00 - 11:00</li>
                <li>Minggu: 07:00 - 11:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} SSB Balida Maju. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
