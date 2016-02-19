Bloggero - A blog app based on Electron

1. Basic Electron structure
	http://electron.atom.io/docs/latest/tutorial/quick-start/

2. Instalar Electron binaries for command-line use using npm. (Development Only)
	https://www.npmjs.com/package/electron-prebuilt
	
3. Application Distribution (manually)
	http://electron.atom.io/docs/v0.36.7/tutorial/application-distribution/
	
3.1 Packaging Tools (Third Party)
	
	* electron-packager
		Electron Packager is a command line tool that packages electron app source code into executables like .app or .exe along with a copy of Electron.
		
		Installation
			https://github.com/maxogden/electron-packager
				
		Command Details
			https://github.com/maxogden/electron-packager/blob/master/usage.txt
			
	* electron-builder
		To create installer wizards for the platforms Win, OS X and Linux. 
		It's built to work together with electron-packager.
		
4. Automatation Tools (Optional)
	
	* grunt-electron-builder-wrapper
		Create Electron installers for the platforms Windows and OS X using electron-builder
		
		Installation
			https://www.npmjs.com/package/grunt-electron-builder-wrapper
