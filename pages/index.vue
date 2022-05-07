<template>
  <div class="bg-gray-100">
    <LayoutsHeader />
    <div class="min-h-screen grid grid-cols-12 gap-4 px-16 mt-6">
      <LayoutsLeftbar class="col-span-2" />
      <div class="col-span-7">
        <Headline />
      </div>
      <LayoutsRightbar class="col-span-3" />
    </div>
  </div>
</template>