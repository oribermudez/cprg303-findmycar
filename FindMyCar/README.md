# FindMyCar

FindMyCar is a Parking Spot Finder App built with React Native and UI Kitten. This app allows users to effortlessly save and retrieve the location of their parked vehicle. In addition to helping users find their parked car, FindMyCar offers features such as providing directions to the parking spot and calculating parking costs based on the start and end times of the parking session.

## Features

- **Save Parking Location**: Store the location of your parked vehicle with just a few taps.
- **Directions to Parking Spot**: Get easy-to-follow directions to your parked car, ensuring a hassle-free retrieval process.
- **Parking Cost Calculation**: The app calculates the cost of parking based on the start and end times of your parking session, providing users with a clear overview of their expenses.

## Technologies Used

- **React Native**: A popular JavaScript framework for building native mobile applications.
- **UI Kitten**: A versatile React Native UI framework that helps in creating beautiful and responsive user interfaces.

## Setting Up a React Native Environment

Step-by-step guide of setting up a React Native environment for mobile app development. You can find most of the steps in the official React Native setup guide. However, this guide is adapted according to the system requirements listed below.

React Native is a powerful framework that allows developers to build cross-platform mobile apps using JavaScript or TypeScript. I will cover system requirements, installation instructions, configuration steps, project creation, running the project in an Android Device Simulator, troubleshooting, and resources.

### System Requirements

Before you begin, it's important to make sure your system meets the following requirements:

- **Processor**: 12th Gen Intel(R) Core(TM) i9-12900HK 2.50 GHz
- **RAM**: Installed RAM 32.0 GB (31.7 GB usable)
- **System type**: 64-bit operating system, x64-based processor
- **OS**: Windows 11 Pro

### Installation Instructions

#### Step 1: Install Node.js and JDK

1.  Open an Administrator Command Prompt (right click Command Prompt and select "Run as Administrator"), then run the following command:

    ```bash
    choco install -y nodejs-lts microsoft-openjdk11
    ```

#### Step 2: Install Android Studio

1.  Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

    - Android SDK
    - Android Virtual Device

2.  Click "Next" to install all of these components.

#### Step 3: Install the Android SDK

1. Open Android Studio, click on "More Actions" button and select "SDK Manager".

2. Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:

   - Android SDK Platform 33
   - Intel x86 Atom_64 System Image
   - Google APIs Intel x86 Atom System Image

3. Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.

4. Finally, click "Apply" to download and install the Android SDK and related build tools.

5. Before moving to the next step, click on the "Customize" tab in Android Studio. Then click "All Settings..." and go to "Languages and Frameworks" in the side menu.

6. Select "Android SDK" and copy the "Android SDK Location", you will need it for the next step. It should look like this:

   ```bash
      %LOCALAPPDATA%\Android\Sdk
   ```

### Configuration Steps

#### Step 1: Configure the ANDROID_HOME environment variable

1. Open the Windows Control Panel.

2. Click on User Accounts, then click User Accounts again

3. Click on Change my environment variables

4. Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK

   ```bash
      Variable name: ANDROID_HOME
      Variable value: --- The Android SDK Location you copied in the previous step. %LOCALAPPDATA%\Android\Sdk ---
   ```

5. To make sure you did it right, open powershell

6. Copy and paste Get-ChildItem -Path Env:\ into powershell

7. Verify ANDROID_HOME has been added

#### Step 2: Add platform-tools to Path

1. Open the Windows Control Panel

2. Click on User Accounts, then click User Accounts again

3. Click on Change my environment variables

4. Select the Path variable

5. Click Edit

6. Click New and add the path to platform-tools to the list

   ```bash
      %LOCALAPPDATA%\Android\Sdk\platform-tools
   ```

No additional configuration steps are required at this point. React Native projects will automatically use the default configuration.

## Getting Started

Now that you have the development environment set up, let's run the project.

1. Clone the project. Inside the project you will find and assets folder, the HTML prototype and the FindMyCar project folder.

```bash
  git clone https://github.com/oribermudez/cprg303-findmycar.git
```

2. Navigate to the project directory

```bash
  cd FindMyCar
```

3. Install dependencies

```bash
  npm install
```

4. Run the app

```bash
  npm start
```
