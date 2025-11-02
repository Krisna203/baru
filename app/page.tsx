'use client';

import Image from "next/image";
import Imagehero from "@/components/Home Image";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>  
      {/* title section */}
      <div className="pt-25 pb-5">
        <p className="text-3xl font-bold text-center">
          Innovating the Future of <br /> Welding Technology
        </p>
      </div>

      {/* image section */}
      <div className="max-w-3xl mx-auto relative flex justify-center items-center">
        <Image className="rounded-xl shadow" 
          src="/image.png"
          alt="Home Image"
          width={800}
          height={600}
          priority
        /> 

        <Imagehero />
      </div>

      {/* layanan */}
      <div className="grid lg:grid-cols-3 mt-28 gap-7 ml-17 mr-17 md:grid-cols-2">
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-money-dollar-circle-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Harga Terbaik</p>
          <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at maiores tempora? Incidunt tempore optio ab!</p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-service-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Service Terbaik</p>
          <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at maiores tempora? Incidunt tempore optio ab!</p>
        </div>
        <div className="shadow-2xl p-7 rounded-2xl">
          <i className="ri-customer-service-2-fill ri-3x text-slate-700"></i>
          <p className="font-semibold text-2xl/normal mb-2">Memberikan Support Terbaik</p>
          <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at maiores tempora? Incidunt tempore optio ab!</p>
        </div>
      </div>

      {/*about us section */}
      <div id="about" className="mt-20">
        <p className="flex items-center justify-center font-bold text-3xl mb-2 mt-20" >ABOUT US</p>
        <div className="grid ml-17 gap-2 mr-17">
          <h2>
            PT Anugerah Kreasindo Abadi Sejahtera (PT.AKAS) adalah perusahaan yang bergerak di bidang service, sales, rental mesin welding. Kami juga memberikan 
            layanan service mesin-mesin welding, design automation system, mengoptimalkan mesin produksi, serta menyediakan kebutuhan welding consumables untuk berbagai industri.
            <br />
            Didukung oleh tim yang berpengalaman dan profesional di bidangnya, PT AKAS berkomitmen untuk memberikan solusi terbaik bagi kebutuhan welding dan automation system Anda. 
            Kami selalu mengutamakan kualitas layanan dan kepuasan pelanggan sebagai prioritas utama dalam setiap proyek yang kami tangani.
          </h2>
          <h2>
            Kami percaya bahwa mesin merupakan aset penting dalam operasional bisnis, oleh karena itu kami menyediakan layanan rental mesin welding dengan berbagai pilihan sesuai kebutuhan pelanggan.
          </h2>
        </div>

        <div className="grid grid-cols lg:grid-cols- md:grid-cols-2 ml-17 mr-17 mt-10 gap-10">
          <div className="shadow-2xl p-7 rounded-2xl">
            <p className="flex items-center justify-center text-2xl font-bold">VISI</p>
            <h2>
               Dengan visi untuk menjadi mitra terpercaya dalam industri welding dan automation system, PT AKAS terus berinovasi dan berkembang guna memenuhi kebutuhan pasar yang semakin kompleks.
               Kami percaya bahwa dengan kerja keras, integritas, dan dedikasi, kami dapat memberikan kontribusi positif bagi kemajuan industri di Indonesia.
            </h2>
          </div>
          <div className="shadow-2xl p-7 rounded-2xl">
            <p className="flex items-center justify-center text-2xl font-bold">MISI</p>
            <li className="list-decimal">
              Memerikan layanan perawatan dan perbaikan mesin welding dengan standar kualitas tinggi untuk memastikan kinerja optimal dan umur panjang mesin pelanggan.
            </li>
            <li className="list-decimal">
              Menyediakan solusi teknis dan desain otomisasi untuk meningkatkan efisiensi produksi dan mengurangi biaya operasional produksi bagi pelanggan.
            </li>
            <li className="list-decimal">
              Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan, transparansi, dan komitmen terhadap kepuasan pelanggan.
            </li>
            <li className="list-decimal">
              Mengembangkan tim profesional yang kompeten dan berdedikasi untuk memberikan layanan terbaik di bidang welding dan automation system.
            </li>
          </div>
        </div>
      </div>

      {/*service section */}
      <div id="service">
        <p className="flex items-center justify-center font-bold text-3xl pt-20">OUR SERVICE</p>
        <div className="grid grid-rows-3 pl-20 pr-20 gap-10 pt-10 md:grid-cols-2 grid-cols-1">
          <div className="flex items-center justify-center">
            <div>
              <h2 className="font-bold text-xl list-decimal">Service Mesin Industri & Welding </h2>
              <li>Maintenance & Overhoul</li>
              <li>Kalibrasi & Troubleshooting</li>
            </div>           
          </div>
          <div className="flex items-center justify-center">
              <Image
            src="/overhould.png"
            alt="Service Image"
            width={300}
            height={500}
            className="rounded-xl shadow-2xl "
          />
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/image2.png"
            alt="Service Image"
            width={300}
            height={300}
            className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="font-bold text-xl list-decimal">Penjualan & Penyewaan Mesin</h2>
              <li>Mesin/Robot Welding & Equipment Pendukung</li>
              <li>Unit bekas berkualitas</li>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <h2 className="font-bold text-xl list-decimal">Desain & Solusi Otomatisasi</h2>
              <li>Pembuatan sistem otomatisasi produksi</li>
              <li>Custom desain sesuai kebutuhan industri</li>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="/image3.png"
            alt="Service Image"
            width={300}
            height={300}
            className="rounded-xl shadow-2xl"
            />
          </div>
            
        </div>
      </div>

      {/* contact us section */}
      <div id="contact-us">
        <p className="flex items-center justify-center font-bold text-3xl pt-15">CONTACT US</p>
      </div>
    </>
    
  );
}
