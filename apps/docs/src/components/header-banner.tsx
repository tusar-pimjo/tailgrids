import Image from "next/image";

export default function HeaderBanner() {
	return (
		<div className="bg-gray-50 dark:bg-gray-900 rounded-3xl relative overflow-hidden mb-8">
			<Image
				src="/images/glow.png"
				alt="Glow"
				width={100}
				height={0}
				className="w-full h-full rounded-r-3xl absolute top-0 right-0 m-0!"
			/>
			<div className="absolute top-0 right-0">
				<Image
					src="/images/logo-banner.png"
					alt="Logo Banner"
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto m-0!"
				/>
			</div>
			<div className="px-8 py-7  relative z-20">
				<h3 className="mt-0 mb-3 text-2xl">Quick Start</h3>
				<p className="mb-0 text-[#6B7280] dark:text-[#9CA3AF] text-sm font-normal max-w-100">
					Browse and effortlessly copy-paste from over 800+ components and
					templates.
				</p>
			</div>
		</div>
	);
}
